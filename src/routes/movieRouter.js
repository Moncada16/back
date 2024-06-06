const {Router} = require("express");
const movieControllers = require("../controllers");
const validateMovies = require("../Middlewares/validateMovies");

const movieRouter = Router();

movieRouter.get("/", movieControllers.getAllMovies);

// movieRouter.get("//bytitle", movieControllers.getmovieBytitle);

// movieRouter.get("/:id", movieControllers.getmovieById);

movieRouter.post("/", validateMovies, movieControllers.createMovie);


module.exports = movieRouter;