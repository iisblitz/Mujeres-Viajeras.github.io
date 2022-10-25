const mongoose = require("mongoose");

const Schema = mongoose.Schema

const catalogSchema = new Schema({
    title:{type: String, required: true, unique: false,minlength: 5},
    description: {type: String, required: false},
    img:{type: String, required:false},
    cost:{type: Number, required:true},
    duration: {type: String, required:false},
    rating: {type: Number, required:false},
    availability: {type: Boolean, required:false},
    classification:{Array, required:false},
    destiny: {Array, required:false},
    services:{Array, required:false},
    hotel:{String, required:false},
    zone:{String, required:false},
    comments:{type:Array, required:false}
    },{
    timestamps:true,
    });

    const Catalog = mongoose.model('catalog',catalogSchema);

    module.exports= Catalog;