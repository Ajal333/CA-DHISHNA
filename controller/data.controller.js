const UD = require('../models/userDetails.model');

exports.data_show = (req,res) => {
    UD.find({} , (err,data) => {
        if (err) {
            console.log('Error');
            return res.render('index');
        }
        else{
            console.log(data);
            res.render("display" , {data : data});  
        }
    })
}