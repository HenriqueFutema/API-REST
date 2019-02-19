const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const IdsController = require('./controllers/IdController');

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.delete("/products/:id", ProductController.delete);
routes.put("/products/:id", ProductController.put);
routes.post("/products", ProductController.store);







module.exports = routes