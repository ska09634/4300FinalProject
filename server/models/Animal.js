const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true

    },
    img:{
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
    desc:{
        type: String,
        required: true
    }
});

const Animal = mongoose.model("animalData", AnimalSchema);

module.exports = Animal;