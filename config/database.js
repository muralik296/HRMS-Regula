const mongoose = require("mongoose");

const {MONGO_URI} = process.env;

exports.connect = function(){
    //Connecting to the database
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(function(){
        console.log(MONGO_URI);
        console.log("Connected Successfully");
    })
    .catch(function(error){
        console.log(error);
    });
}