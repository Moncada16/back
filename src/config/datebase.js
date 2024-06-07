require("dotenv").config();
const mongoose = require("mongoose");
MONGO_URI = `mongodb+srv://juanxomoncada:bbPEz3uqKMslBj3w@prueba.gatqhha.mongodb.net/Movies`
const datebase = async ()=>{
    await mongoose.connect(process.env.MONGO_URI);
};

module.exports = datebase;