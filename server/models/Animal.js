const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {collection: 'animalData'});

const Animal = mongoose.model("animalData", AnimalSchema);

module.exports = Animal;