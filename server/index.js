const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json());

mongoose.connect('mongodb+srv://user1:pass123@final-project-cluster.qpzujow.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.get('/', (req, res) =>{

});

app.listen(3001, () =>{
    console.log('Server running on port 3001...');
});