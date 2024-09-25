
const express = require('express');
const order = require('../model/order');
const router = express.Router();


router.post('/createorder', express.json(), async (req, res) => {
    try {
        const {user,products,totalprice} = req.body
        if(!user || !products){
            return res.status(400).json({message:"missing user or product or totalprice in the requrest"})
        }
        const orders = new order({
            user,
            products,
            totalprice
        })
        await orders.save()
        res.status(201).json({message:'order created suceesfuly'})
    } catch (error) {
        console.log("failed to created order",error)
        res.status(500).json({error:"faliled to create an order"})
        
    }
})
router.get('/all', async(req,res)=>{
    try {
        const orders = await order.find()
        res.status(200).json(orders)
    } catch (error) {
        return res.status(500).json({error:"failed to retreive all order"})
    }
})

router.put('/order/:id',async(req,res)=>{
    const {id} = req.params;
    const {status} = req.body
    try {
        const orders = await order.findById(id)
        if(!orders){
            return res.status(404).json({message:"order not found"})
        }
        orders.status = status;
        await orders.save({ validateModifiedOnly: true });

        res.status(200).json({message:"order status updated successfully",orders})

    } catch (error) {
        console.log("error in order status",error)
        res.status(500).json({message:"error in order status",error})
        
    }
})
module.exports = router;