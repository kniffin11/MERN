//  syntax for filename singularFileName.model.js ie jokes-api is joke.model.js
const mongoose = require("mongoose");

// describe how the jokes collaction should look 

// best practice is FileNameSchema
// these are the instructions of how the collection should look. 
const JokesSchema = new mongoose.Schema({
    // the id is generated automatically
    setup: {
        type: String,
        // first value is if its true or not, secodn is error message the user will see
        required: [true, "Setup is required"],
        // first val is min-length
        minlength: [10, "Setup must be atleast 10 letters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be atleast 10 letters"]
    }
    // dont forget this line of code
}, {timestamps: true})

// match this function name with 1st parameter, second is the schema name
const joke = mongoose.model("joke", JokesSchema);

// this needs to make the above function name
module.exports = joke;