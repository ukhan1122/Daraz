const express = require ('express')
const port = 8000
const app  = express()
const cors = require('cors')
const db = require ('./db')
const router = require('./router/Authentication')
const taskrouter = require('./router/Task')
const Category = require('./router/Category')
const Orders = require('./router/Order')
const subcategories = require('./router/Subcategory')


app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/authentication',router)
app.use('/task',taskrouter)
app.use('/category',Category)
app.use('/order',Orders)
app.use('/sub',subcategories)
db()
app.get('/',(req,res)=>{
    res.send("wellcome page here")
})

app.listen(port,()=>{
    console.log(`server starting at port ${port}`)
})