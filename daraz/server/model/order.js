const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:"true"
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product ",
                required:true,
            },
            quantity:{
                type:Number,
                required:true
            }
        },
     
    ],
    orderDate:{
        type:String,
        default:Date.now
    },
    status:{
        type:String,
        default:"pending"
    },
    totalprice :{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Order',orderSchema);