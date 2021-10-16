const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name must be present!"],
        minlength: [2, "Name must be at least 2 Characters long!"]
    },
    image:{
        type: String
    },
    genre: {
        type: String,
        required: [true, "Name must be present!"],
        minlength: [2, "Name must be at least 2 Characters long!"]
    },
    year: {
        type: Number,
        required: [true, "Must enter a year"]
    },
    length: {
        type: String,
        required: [true, "Must enter a number"]
    }
},{timestamps: true});

//instantiate schema and export
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;