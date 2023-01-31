const mongoose = require('mongoose');

const registerID = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    number : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    }

})

const register = new mongoose.model("Registration", registerID);

module.exports = register;