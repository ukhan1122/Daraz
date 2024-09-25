const mongoose = require ('mongoose')

const connectdb = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/daraz',{
            
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log("mongos connectd")
    } catch (error) {
        console.log('mongo db not connected',error)
    }
}
module.exports = connectdb;