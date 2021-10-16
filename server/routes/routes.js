const Movie = require("../controllers/Movie.controller");

module.exports = (app) => {
    app.get("/api/movies", Movie.findAll);
    app.put("/api/movies/:id", Movie.update);
    app.delete("/api/movies/:id", Movie.delete);
    app.post("/api/movies", Movie.create);
    app.get("/api/movies/:id", Movie.findOne);
}