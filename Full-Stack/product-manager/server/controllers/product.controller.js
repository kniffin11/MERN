const Product = require('../models/product.model');

module.exports.findAllProducts = (req,res)=>{
    // this returns back a promise - meaning a .then and a .catch
    // is a built in to find all
    Product.find()
        .then(allProducts=>{
            // industry standard
            res.json({results: allProducts})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.createProduct = (req,res)=>{
    // this returns back a promise - meaning a .then and a .catch
    // is a built in to create a row
    // req.body represents form information
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.findOneProduct = (req,res)=>{
    Product.findOne({_id: req.params.id})
    .then(oneProduct =>{
        res.json({results: oneProduct})
    })
    .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.updateJoke = (req,res)=>{
    joke.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedJoke =>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}
module.exports.updateProduct = (req,res)=>{
    Product.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true},
        )
        .then(updatedProduct =>{
            res.json({results: updatedProduct})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deletedProduct =>{
        res.json({results: deletedProduct})
    })
    .catch(err=>{res.json({msg: "Something went wrong", error: err})})
}

module.exports.findRandomProduct = (req,res)=>{
    Product.find()
        .then(allProducts=>{
            let randomIdx = Math.floor(Math.random()*allProducts.length);

            res.json({results: allProducts[randomIdx]})
        })
        .catch(err=>{res.json({msg: "Something went wrong", error: err})})
    }