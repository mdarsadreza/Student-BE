//This file is only used for locally on server 9291
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const router = require('./routesPackage')
app.use("/", router);

app.listen(9291);