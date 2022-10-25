const mongoose = require("mongoose");

const Schema = mongoose.Schema

const blogSchema = new Schema({
    userName:{type:String,required:true},
    travel:{type:String,required:true},
    rating:{type:Object, required:false},
    likes:{type:Object, required:false},
    comments:{type:Object, required:false},
    },{
    timestamps:true,
    });

    const Blog = mongoose.model('blog',blogSchema);
    module.exports= Blog;