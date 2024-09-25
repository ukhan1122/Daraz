const mongoose = require ('mongoose');
const { type } = require('os');
const TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    completed:{
     type:Boolean,
     default:false
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
        index:true
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory",
        requried:true,
        index:true
    },
    quantity:{
        type:Number,
        required:true
    },
    photo:{
        data:String,
        contentType:String
    }
  
})

const task = mongoose.model("task",TaskSchema)
module.exports = task;