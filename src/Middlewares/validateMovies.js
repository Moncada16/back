const validateMovies = (req, res, next) => {
    const {title,year,director,poster} = req.body;
        if (!title ||!director ||!poster) {
        return res.status(400).json({
            error: "Todos los campos son obligatorios"
        });
    }
        if(typeof year !== 'number' || year.toString().length !== 4) {
            return res.status(400).json({ message: 'El año debe ser un número de 4 dígitos' });
        
    } else {

        next();
        
    }

};

module.exports = validateMovies;