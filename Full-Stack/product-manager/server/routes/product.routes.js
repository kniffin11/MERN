const ProductController = require('../controllers/product.controller');
const Product = require('../models/product.model');

module.exports = (app)=>{
    // static routes go to top to avoid being swallowed by dymaic routes
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/random", ProductController.findRandomProduct);
    app.post("/api/products/new", ProductController.createProduct);
    // all dynamic routes
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}