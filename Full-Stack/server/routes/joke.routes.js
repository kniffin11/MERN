//  syntax for filename singularFileName.routes.js ie jokes-api is joke.routes.js
const JokeController = require('../controllers/Joke.controller');
const Joke = require('../models/joke.model');


module.exports = (app)=>{
    // static routes go to top to avoid being swallowed by dymaic routes
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    // all dynamic routes
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}

