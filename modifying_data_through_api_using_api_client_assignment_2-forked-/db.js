const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://saideepdasari30:4B9rzoEiGuuIz9kc@cluster0.tmnne.mongodb.net/")
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err)=>{console.log(`Error:${err}`)})