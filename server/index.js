const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

const Animal = require("./models/Animal");
const Card = require("./models/Card");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://user1:pass123@final-project-cluster.qpzujow.mongodb.net/animal?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/animals', cors(), async (req, res) => {
    const animal_data = req.body;
    const animal = new Animal(animal_data)

    animal.save().then((animal) => {
        console.log('Saved Successfully');
        res.status(201).send(animal);
    }).catch((error) =>{
        console.log('Could Not Save');
        res.status(400).send(error);
    })
});

app.get('/animals', cors(), async (req, res) => {
    Animal.find({}, function(err, animals){
        var animalList = [];

        animals.forEach(function(animal){
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
    }).catch((error) =>{
        console.log('Could Not Save');
        res.status(400).send(error);
    })
});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});

app.get('/cards', cors(), async (req, res) => {
    Card.find({}, function(err, cards){
        var cardList = [];

        cards.forEach(function(card){
            cardList.push(card);
        });

        res.send(cardList);
    });
});