const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    index:{
        type: Number,
        required: true
    }
}, {collection: 'cardList'});

const Card = mongoose.model("cardList", CardSchema);

module.exports = Card;