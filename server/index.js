require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

const Animal = require("./models/Animal");
const Card = require("./models/Card");
const User = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://user1:pass123@final-project-cluster.qpzujow.mongodb.net/animal?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/animals', cors(), async (req, res) => {
    console.log(req.body);
    const animal_data = req.body;
    // const animal = new Animal(animal_data);

    var query = {title: req.body.title},
        update = animal_data,
        options = { upsert: true, new: true, setDefaultOnInsert: true };

    Animal.findOneAndUpdate(query, update, options, function (error, data) {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log(data);
            res.send("ok");
        }
    });
});

app.post('/delete-animal/:title', cors(), async (req, res) => {
    const title = req.params.title;

    console.log(`animal title: ${title}`);

    Animal.findOneAndDelete({ title: title }, (error, data) => {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log(data);
            res.send("ok");
        }
    });
});

app.get('/animals', cors(), async (req, res) => {
    Animal.find({}, function (err, animals) {
        var animalList = [];

        animals.forEach(function (animal) {
            animalList.push(animal);
        });

        res.send(animalList);
    });
});

app.post('/cards', cors(), async (req, res) => {
    const card_data = req.body;
    const card = new Card(card_data)

    card.save().then((card) => {
        console.log('Saved Successfully');
        res.status(201).send(card);
    }).catch((error) => {
        console.log('Could Not Save');
        res.status(400).send(error);
    })
});

app.get('/cards', cors(), async (req, res) => {
    Card.find({}, function (err, cards) {
        var cardList = [];

        cards.forEach(function (card) {
            cardList.push(card);
        });

        res.send(cardList);
    });
});

app.post('/cards/:title', cors(), async (req, res) => {
    const title = req.params.title;
    const new_title = req.body;

    console.log(`oldTitle: ${title}, newTitle: ${new_title.title}`);

    Card.findOneAndUpdate({ title: title }, new_title, { new: true }, (error, data) => {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log(data);
            res.send("ok");
        }
    });
});

app.post('/users', cors(), async (req, res) => {
    // console.log(req.body);
    const user_data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    };

    // console.log(`password: ${user_data.password}`);

    const takenEmail = await User.findOne({ email: user_data.email });

    if (takenEmail) {
        res.json({ message: "Email has already been taken" });
        return;
    }

    const user = new User(user_data)
    user.password = await bcrypt.hash(req.body.password, 10);

    user.save().then((user) => {
        console.log('Saved Successfully');
        res.status(201).send(user);
    }).catch((error) => {
        console.log('Could Not Save');
        console.log(error);
        res.status(400).send(error);
    })
});

app.get('/users', cors(), async (req, res) => {
    User.find({}, function (err, users) {
        var userList = [];

        users.forEach(function (user) {
            userList.push(user);
        });

        res.send(userList);
    });
});

app.post('/login', async (req, res) => {
    let userLoggingIn = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userLoggingIn.email })
        .then(dbUser => {
            if (!dbUser) {
                return res.json({
                    message: "Invalid Email or Password"
                });
            }

            // console.log(`password1: ${userLoggingIn.password}\npassword2: ${dbUser.password}`);
            // return res.json({message: "successful request"});
            bcrypt.compare(userLoggingIn.password, dbUser.password)
                .then(isCorrect => {
                    // console.log(`password1: ${userLoggingIn.password}\npassword2: ${dbUser.password}`);
                    // console.log(`isCorrect: ${isCorrect}`);
                    if (isCorrect) {
                        const payload = {
                            id: dbUser._id,
                            email: dbUser.email
                        };

                        const jwtsecret = process.env.JWT_SECRET;

                        // console.log(`process.env:${process.env}\njwtsecret: ${jwtsecret}`);

                        jwt.sign(
                            payload,
                            jwtsecret,
                            { expiresIn: 86400 },
                            (err, token) => {
                                // console.log(`err: ${err}\ntoken: ${token}`);
                                if (err) return res.json({ message: err })
                                return res.json({
                                    message: "Success",
                                    token: "Bearer " + token
                                })
                            }
                        )

                    } else {
                        return res.json({
                            message: "Invalid Email or Password"
                        });
                    }
                });
        });
});

app.get("/getEmail", verifyJWT, (req, res) => {
    res.json({ isLoggedIn: true, email: req.user.email });
});

app.post('/comp', async (req, res) => {
    const password1 = req.body.password_one;
    const password2 = await bcrypt.hash(req.body.password_two, 10);

    console.log(`password1: ${password1}\npassword2: ${password2}`);

    bcrypt.compare(password1, password2)
        .then(doesItMatch => {
            console.log(`doesItMatch: ${doesItMatch}`);
            if (doesItMatch) {
                return res.json({
                    message: "Password Correct"
                });
            } else {
                return res.json({
                    message: "Invalid Email or Password"
                });
            }
        });

});

app.use(function (req, res) {
    res.json({
        error: {
            'name': 'Error',
            'status': 404,
            'message': 'Invalid Request',
            'statusCode': 404,
            'stack': 'http://localhost:3001/'
        },
        message: 'Testing'
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    // console.log(`token: ${token}`);

    if (token) {
        // console.log('Token is there');
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                // console.log(`err: ${err}`);
                return res.json({
                    isLoggedIn: false,
                    message: "Failed To Authenticate"
                })
            }
            // console.log('No Error Found');
            req.user = {};
            req.user.id = decoded.id;
            req.user.email = decoded.email;
            next();
        });
    } else {
        // console.log('Incorrect Token Given');
        res.json({ message: "Incorrect Token Given", isLoggedIn: false });
    }
}