const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books');

const db = mongoose.connection;

db.on('connected',(err) =>{
    if(err){
        console.log("Mongodb connected failed!");
        return false;
    }
    console.log("Mongodb connected success!");
})

module.exports = db;