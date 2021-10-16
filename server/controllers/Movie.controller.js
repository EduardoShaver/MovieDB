const Movie = require("../models/Movie");

module.exports = {
    //READ ALL
    findAll: (req, res) =>{
        Movie.find().sort({title: 'asc', test: -1})
            .then(allMovies => {
                console.log("allMovies", allMovies)
                res.json({allMoviesArray: allMovies})
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: "error", error: err})
            });
    },
    //Read one
    findOne: (req, res) => {
        Movie.findById(req.params.id)
            .then(movie => res.json(movie))
            .catch(err => res.status(400).json(err))
    },
    //Create
    create: (req, res) => {
        Movie.create(req.body)
            .then(newMovie => res.json(newMovie))
            .catch(err => res.status(400).json(err))
    },
    //Update
    update: (req, res) => {
        Movie.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedMovie => res.json(updatedMovie))
            .catch(err => res.status(400).json(err))
    },
    //Delete
    delete: (req, res) => {
        Movie.findByIdAndDelete(req.params.id)
            .then(result => res.json({result: result}))
            .catch(err => res.status(400).json(err))
    }
}