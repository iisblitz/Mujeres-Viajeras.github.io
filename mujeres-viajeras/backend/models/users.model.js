const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {type:String, required:true, unique: true, trim:true, minlength: 3},
    name:{type:String, required:false},
    Password:{type:String, required:false, minlength: 8},
    lastName:{type:String, required:false},
    age:{type:Number,required:false}, 
    origin:{type:String, required:false},
    email:{type:String, required:false},
    telephone: {type: Number, required:false},
    imgPic:{type:String, required: false},
    travels:{type:Array, required:false},
    favorites:{type:Array, required:false},
    },{
    timestamps:true,
    });

    const User = mongoose.model('user',userSchema);
    module.exports= User;