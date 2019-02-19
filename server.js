const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb://adm123:starter123@ds151994.mlab.com:51994/starter", { useNewUrlParser: true }
)
requireDir("./src/models");

const Product = mongoose.model("Product");

app.use('/api', require('./src/routes'));

app.listen(3000);