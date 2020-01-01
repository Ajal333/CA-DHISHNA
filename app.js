const express = require ('express');
const MongoClient= require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb1";

const server = express();

server.get('/', (req,res) => {
    res.sendFile('/home/ajal/Documents/Ajal/mongodb/index.html');
});


server.route('/view_userDetails').get( (req,res) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        const dbo = db.db("mydb1");
        const collection = dbo.collection("customers");
        const cursor = collection.find();
        var data = "";
        var name = "";
        var college = "";
        var sem = "";
        var phone = "";
        var email = "";
        var exp = "";
        var why = "";
        var timestamp = ""; 
        cursor.forEach((doc) => {
            if (doc != null) {
                name =  "User Name : "+doc.name+"<br>";
                college = " College : " +doc.college + " <br>";
                sem =  "    Semester:  "+ doc.sem+ "</br>";
                phone = " Phone No : " +doc.phone + " <br>";
                email = "    Email:  "+ doc.email+ "</br>";
                exp = " Experience : " +doc.exp + " <br>";
                why = "    Why :  "+ doc.why+ "</br>";
                timesamp = " timestamp : " +doc.timestamp + " <br>";
                data = data +  name + college + sem+phone+email+exp+why+timestamp+"<br>";
            }
            },() => {
                res.send(data);
                db.close();
        });
        
    });
});

server.listen(3000);