//1. import mongoose
const mongoose = require("mongoose");
const DB = "Movie_DB";

// 2. connect mongoose to mongoDB
mongoose.connect("mongodb://localhost/" + DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then( () => console.log(`---> connected to ${DB} db `))
    .catch((err) => console.log(`error connecting to ${DB}`, err));