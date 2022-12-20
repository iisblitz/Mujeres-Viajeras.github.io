const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {type:String, required:true, unique: true, trim:true, minlength: 3},
    name:{type:String, required:true},
    Password:{type:String, required:true, minlength: 8},
    age:{type:Number,required:true}, 
    origin:{type:String, required:true},
    email:{type:String, required:true},
    telephone: {type: Number, required:false},
    imgPic:{type:String, required: false},
    travels:{type:Array, required:false},
    favorites:{type:Array, required:false},
    },{
    timestamps:true,
    });

    const User = mongoose.model('user',userSchema);
    module.exports= User;