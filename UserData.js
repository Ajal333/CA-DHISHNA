const UD = require("./models/userDetails.model");


var data = [
    {
        college : "soe",
        email : "adjasdfj@gmail.com",
        exp : "dasdadsa",
        name : "Ajal",
        phone : 9128692836,
        sem : "Sem 1",
        timestamp : "afda sda",
        why : "dkajshdkjsad"
    },

    {
        college : "soe",
        email : "adjasdj@gmail.com",
        exp : "dasdadsa",
        name : "Sujith",
        phone : 9188692837,
        sem : "Sem 1",
        timestamp : "afda sda",
        why : "dkajshdkjsad"
    },

    {
        college : "soe",
        email : "adjasdj@gmail.com",
        exp : "dasdadsa",
        name : "aswin",
        phone : 9188623836,
        sem : "Sem 1",
        timestamp : "afda sda",
        why : "dkajshdkjsad"
    },

    {
        college : "soe",
        email : "adjasdj@gmail.com",
        exp : "dasdadsa",
        name : "unni",
        phone : 9188562836,
        sem : "Sem 1",
        timestamp : "afda sda",
        why : "dkajshdkjsad"
    },

    {
        college : "soe",
        email : "adjasdj@gmail.com",
        exp : "dasdadsa",
        name : "gokul",
        phone : 9188623836,
        sem : "Sem 1",
        timestamp : "afda sda",
        why : "dkajshdkjsad"
    }

];

const mongoose = require('mongoose');

// make a connection
mongoose.connect('mongodb://localhost/ca');
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");

    UD.collection.insertMany(data, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
    
});
