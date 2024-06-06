const movieService = require("../services/movieService")

module.exports = {
    getAllMovies: async (req, res) =>{
        try {
            const movie = await movieService.getMovies();              
                res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({
                error: "Error del servidor interno"
            });
            
        }
    },

    // getmovieById: async (res,req) =>{
    //     const {id} = req.params;
    //     const movie = await movieService.getmovieById(id);
    //     res.status(200).json(movie);
    // },

    // getmovieBytitle: async (res,req) =>{
    //     const {title} = req.body;
    //     const movie = await movieService.getmovieBytitle(title);
    //     res.status(200).json(movie);
    // },

    createMovie: async (req, res)=>{
        try {
            const {title,year,director,duration,genre,rate,poster} = req.body;
            
            const newMovie = await movieService.createMovie({title,year,director,duration,genre,rate,poster});
            res.status(201).json({
                message: "Pelicula agregada correctamente", movie: newMovie });
            
        } catch (error) {
            res.status(400).json({
                error: "Error al crear pelicula"
            })
            
        }
    }
};