const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.oo5m38b.mongodb.net/chatApp?retryWrites=true&w=majority`,()=>{
    console.log("DB connected")
})
