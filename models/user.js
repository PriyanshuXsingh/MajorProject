const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
});
userSchema.plugin(passportLocalMongoose);//it is used because it automatically generates username and password in the database
module.exports = mongoose.model("User", userSchema);