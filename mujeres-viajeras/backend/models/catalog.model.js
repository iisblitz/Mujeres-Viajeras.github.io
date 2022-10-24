const mongoose = require("mongoose");

const Schema = mongoose.Schema

const catalogSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
    description: {type: String, required: false},
    img:{type: String, required:false},
    cost:{type: Number, required:true},
    duration: {type: String, required:false},
    rating: {type: String, required:false},
    availability: {type: Boolean, required:false},
    classification:{Array, required:false},
    Destiny: {Array, required:false},
    Services:{Array, required:false},
    Hotel:{String, required:false},
    Zone:{String, required:false},
    Comments:{type:Array, required:false}
    },{
    timestamps:true,
    });

    const Catalog = mongoose.model('catalog',catalogSchema);

    module.exprots= Catalog;