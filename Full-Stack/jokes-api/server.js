const express = require("express");
const app = express(); // create an app -- instance of express
const port = 8000; // set the port

// for post requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// this import is the same as having all of the code from the below file exacatly where it is within this file, ran on line 11
require("./server/config/mongoose.config")

// same as above, all routes here
// the (app); on the end actually imports app to the routes file
require("./server/routes/joke.routes")(app);

app.listen(port, ()=>console.log(`listening on port ${port}`));