// ../ goes back a folder, .../ goes back 2 folders
const joke = require('../models/joke.model'); // import model so controller can talk ot db

module.exports.findAllJokes = (req,res)=>{
    // this returns back a promise - meaning a .then and a .catch
    // is a built in to find all
    joke.find()
        .then(allJokes=>{
            // industry standard
            res.json({results: allJokes})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.createJoke = (req,res)=>{
    // this returns back a promise - meaning a .then and a .catch
    // is a built in to create a row
    // req.body represents form information
    joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.findOneJoke = (req,res)=>{
    joke.findOne({_id: req.params.id})
    .then(oneJoke =>{
        res.json({results: oneJoke})
    })
    .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.updateJoke = (req,res)=>{
    // this will display the object after
    joke.findByIdAndUpdate(
        {_id: req.params.id},
        // specify the forms info to update form
        req.body,
        // these say to display the new info and to run validations on the new data
        {new: true, runValidators: true}
        )
        .then(updatedJoke =>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.deleteJoke = (req,res) => {
    joke.deleteOne({_id: req.params.id})
    .then(deletedJoke =>{
        res.json({results: deletedJoke})
    })
    .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.findRandomJoke = (req,res)=>{
    joke.find()
        .then(allJokes=>{
            // get a rndom index from 0 to allJokes.length -1
            // math.random returns 0-1, mult it by # of jokes then round.
            let randomIdx = Math.floor(Math.random()*allJokes.length);

            res.json({results: allJokes[randomIdx]})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}