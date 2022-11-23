const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

const AnimalModel = require("./models/Animal");

var counter = 0;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://user1:pass123@final-project-cluster.qpzujow.mongodb.net/animal?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/animals', cors(), async (req, res) => {
    console.log('Connection Status: ', mongoose.connection.readyState);

    const animal_data = req.body;
    console.log(++counter);
    console.log(animal_data);
    const animal = new AnimalModel(animal_data)
    console.log(animal.name + ', ' + animal.title + ', ' + animal.description + ', ' + animal.image);

    animal.save().then((animal) => {
        console.log('Saved Successfully');
        res.status(201).send(animal);
    }).catch((error) =>{
        console.log('Could Not Save');
        res.status(400).send(error);
    })
});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});