const mongoose = require("mongoose");

const Schema = mongoose.Schema

const blogSchema = new Schema({
    user:{type:String,required:true},
    travel:{type:String,required:true},
    rating:{type:Object, required:false},
    likes:{type:Object, required:false},
    Comments:{type:Object, required:false},
    },{
    timestamps:true,
    });

    const Blog = mongoose.model('blog',blogSchema);
    module.exprots= Blog;