const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userDetailsSchema = new Schema ({
    name : {type : String},
    college : {type : String},
    email : {type : String},
    phone : {type: Number},
    sem : {type : String},
    exp : {type : String},
    why : {type : String},
    timestamp : {type : String}
});

module.exports = mongoose.model('UserDetail',userDetailsSchema);