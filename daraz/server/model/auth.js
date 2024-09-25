const mongoose = require('mongoose')

const authschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true,
    },
    createat:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        enum:['admin','regular'],default:'regular'
    }
})
const auth = mongoose.model("auth",authschema)

module.exports = auth