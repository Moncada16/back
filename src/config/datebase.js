require("dotenv").config();
const mongoose = require("mongoose");
MONGO_URI = `mongodb://mongo:zJbgZxTOtYqJojKkpEbqkaVfhMabnPHu@roundhouse.proxy.rlwy.net:34703/`
const datebase = async ()=>{
    await mongoose.connect(process.env.MONGO_URI);
};

module.exports = datebase;