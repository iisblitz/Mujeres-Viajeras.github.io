const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {type:String, required:true, unique: true, trim:true, minlength: 3},
    Name:{type:String, required:true},
    Password:{type:String, required:true, unique: true, trim:true, minlength: 8},
    LastName:{type:String, required:true},
    Age:{type:Number,required:true}, 
    Origin:{type:String, required:true},
    Email:{type:String, required:true},
    Telephone: {type: Number, required:true},
    ImgPic:{type:String, required: true},
    Travels:{type:Array, required:true},
    Favorites:{type:Array, required:true},
    },{
    timestamps:true,
    });

    const User = mongoose.model('user',userSchema);
    module.exprots= User;