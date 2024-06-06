const Movies = require("../models/Movies");

module.exports = {
    getMovies: async(res, req) =>{
      try {
        const movie = await Movies.find();
        const movies = movie.map(({title,year,director,duration,genre,rate,poster}) =>{
            const newMovie = new Movie (title,year,director,duration,genre,rate,poster);
            return newMovie;
        });
      return movies;
      
      } catch (error) {
        res.status(500).json({
        error: "Error en las peliculas"
    });
      }
    },

    createMovie: async(data)=>{try {
      const create = await Movies.create(data);
      await create.save();
      return create;
      
    } catch (error) {
      return {errorMessage: error.message}
      
    }
        
    }
};

class Movie {
  constructor(title,year,director,duration,genre,rate,poster) {
    if (!title || !poster || !director) {
      throw new Error('Todos los parametros son necesarios');
    }
    
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  };
};


