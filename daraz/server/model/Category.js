const mongoose = require('mongoose')

const Category = mongoose.Schema({

    Name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    },
    subcatgories:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subcategory",
    }
    ]
})

const Categorymodel = mongoose.model("category",Category)
module.exports = Categorymodel;