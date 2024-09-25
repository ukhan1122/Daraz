const express = require('express')
const mongoose = require('mongoose')
const auth = require('../model/auth')
const task = require('../model/Task')
const formidable = require('express-formidable')
const fs = require('fs')
const router = express.Router()

 router.post('/createproduct',formidable(),async(req,res)=>{
    try {
         const {title,description,completed,quantity,price,category,subcategory} = req.fields;
         const {photo} = req.files
         console.log("create task",title,description,completed,quantity,price,category)
       if(!title){
        res.status(400).json({message:"title required"})
       } if(!description){
        res.status(400).json({message:"description required"})
       } if(!quantity){
        res.status(400).json({message:"quantity required"})
       } if(!price){
        res.status(400).json({message:"price required"})
       } if(!category){
        res.status(400).json({message:"category required"})
       } if(!completed){
        res.status(400).json({message:"completed required"})
       }
       if(!subcategory){
        res.status(400).json({message:"subcategort is required"})
       }
       if(!photo  || !photo.size){
        res.status(400).json({message:"photo required"})
       }
     
        // Convert photo data to Base64 string
        const photoData = fs.readFileSync(photo.path);
        const photoBase64 = photoData.toString('base64');
        const photoContentType = photo.type;
       const product = new task({...req.fields,
        photo:{
            data : photoBase64,
            contentType: photoContentType
           }
       })
      
       await product.save()
        res.status(201).json({message:"task add successfully",product})

    } catch (error) {
        res.status(500).json({error:"error while adding task"})
        console.log("error while adding task",error)
    }
})

// route to get all product 

router.get('/getallproduct',async(req,res)=>{
    try {
        const product = await task.find()
      return  res.status(200).json({message:" all products fetched successfully",counttotal:product.length,product})
        
    } catch (error) {

       return res.status(500).json({message:"erro while fetching all products"})
        
    }
})
router.put('/update/:id', formidable(),async (req,res)=>{
    try {
        const productId = req.params.id;
        const{title,quantity,description,category,price} = req.fields
        const{photo} = req.files
        const product = await task.findByIdAndUpdate(productId)

        if(!product){
            return res.status(404).json({message:'task not found'})
        }
        product.title = title || product.title;
        product.quantity = quantity || product.quantity;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category


        if(photo){
            
        const productphot = fs.readFileSync(photo.path)
        const photobase = productphot.toString('base64')
        const photoContentType= photo.type

            product.photo = {
              data :  photobase,
            contentType : photoContentType
            
        }
    }

        await product.save()
        return res.status(200).json({message:"product updated successfully ",product})
    } catch (error) {
        console.log("error while updaing category",error)
        return res.status(500).json({message:"error while updating product"})
        
    }
})

router.delete('/delete/:id',async(req,res)=>{

    try {
        const {id} = req.params;
        const product = await task.findByIdAndDelete(id)
        if(!product){
            return res.status('404').json({message:"product not found"})
        }
        return res.status(200).json({message:"product deletd succesffuly"})
    } catch (error) {
        console.log("eror while deleting product",error)
        return res.status(500).json({message:"error while deleted product"})
    }

})

router.get('/get/:id',async(req,res)=>{
    try {
        const {id} = req.params
        console.log("Received ID:", id);


        const product = await task.findById(id);
        console.log("Found Product:", product);

        if(product.length === 0){
            return res.status(404).json({message:"no product found in this category"})
        }
        return res.status(200).json({message:"prdouct fetched successfuly",product})
    } catch (error) {
        console.log("error while geting product",error)
        return res.status(500).json({message:"error while geting product"})
    }
})
module.exports = router