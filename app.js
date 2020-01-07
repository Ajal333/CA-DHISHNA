const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserDetails = require('./models/userDetails.model');

// Establish a database connection
mongoose.connect('mongodb://localhost/ca');

//Create server
let server = express();

//Use assets
server.use("/assets/css", express.static(__dirname + "/assets/css"));

//Setting view engine
server.set("view engine","ejs");

//Show static page
server.get('/',(req,res) => {
        res.render('index');
});

server.get('/view',(req,res) => {  
    //Get the database
    let db = mongoose.connection;   
    db.on('error',console.error.bind(console,"connection error"));
    db.once('open', () => {
        console.log("Connection Successful");
        UserDetails.find((err,docs) => {
            if(err) return console.error(err);
            console.log(docs);
        });
    });

});

server.listen(3000);