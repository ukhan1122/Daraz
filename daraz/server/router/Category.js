const express = require('express')
const { isAdmin} = require('../middleware/admin')
const router = express.Router()
const slugify = require('slugify')
const Categorymodel = require('../model/Category')
const subcategory = require('../model/subcategory')


router.post('/createcategory', isAdmin,async(req,res) =>{

    try {   
        console.log('Request Headers:', req.headers);
        const 
        {
            Name,
            subcatgories

        } = req.body;
       if(!Name){
        return res.status(404).json({message:"enter category name"})
       }
       
       const slug = slugify(Name,{lower:true})
       const category = new Categorymodel(
        {Name,
        slug
    })
        const SubcategoryIds = []
        for(const sub of subcatgories){
            const Subcategory = new subcategory({
                name:sub,
                slug:slugify(sub,{lower:true}),
                Category:category._id
            })
            
        await Subcategory.save()
        SubcategoryIds.push(Subcategory._id)
        }
        category.subcatgories = SubcategoryIds
        await category.save()

        res.status(200).json({message : "Categroy created successfuly",slug})
        
    } catch (error) {
        console.log("error while createign category",error)
        res.status(500).json({message:"error while creating category"})
        
    }
})

router.put('/update/:id',isAdmin,async(req,res)=>{
    try {
        const{Name} = req.body
        const{id} = req.params
        const category = await Categorymodel.findByIdAndUpdate(
            id,
            {Name,
            slug:slugify(Name,{lower:true}),    

            },
            {new:true}
        )
        if(!category){
            return res.status(404).json({message:"categor not found"})
        }
        res.status(200).json({message:"category update successfuly", category})
    } catch (error) {
        console.log("error while updating caataegory",error)
        res.status(404).json({message:"error while updateing category"})
    }
})
 router.get('/get/:id',async(req,res)=>{
    try {
        const category = await Categorymodel.find()
        res.status(200).json({message:"all category retreived successfuly",category})
    } catch (error) {
        res.status(500).json({message:'error',error})
    }
 })
 router.delete('/delete/:id',async(req,res)=>{
    try {
        const{id} = req.params
        const category = await Categorymodel.findByIdAndDelete(id);
        if(!category){
            res.status(404).json({message:"category not found"})
        }
        res.status(404).json({message:"category deleted successfully",category})
        
    } catch (error) {
        res.status(500).json({message:"error while deleting category",error})
    }
 })

 
module.exports = router