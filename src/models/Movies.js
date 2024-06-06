const mongoose = require("mongoose");

const MoviesSchema =  new mongoose.Schema({
    title : String,
    year : Number,
    director : String,
    duration : String,
    genre : Array,
    rate : Number,
    poster : String,
});

const Movie = new mongoose.model("Movie", MoviesSchema);

module.exports = Movie;