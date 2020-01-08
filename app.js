const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const userdetails = require('./models/userDetails.model');

const data_routes = require("./routes/data.route");

// Establish a database connection
mongoose.connect('mongodb://localhost/ca', {
    useMongoClient : true,
});

//Create server
const server = express();

//Use assets
server.use("/assets/css", express.static(__dirname + "/assets/css"));
server.use("/view",data_routes);

//Setting view engine
server.set("view engine","ejs");

//Show static page
server.get('/',(req,res) => {
        res.render('index');
});

server.listen(3000);