const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
}, {collection: 'cardList'});

const Card = mongoose.model("cardList", CardSchema);

module.exports = Card;