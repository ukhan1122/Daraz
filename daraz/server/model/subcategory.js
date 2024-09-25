const mongoose = require ('mongoose')

const subcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug: {
        type: String,
        lowercase: true,
        required: true
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }
})

const subcategory = mongoose.model("Subcategory",subcategorySchema)
module.exports = subcategory