const express = require('express')
const router = express.Router();
const auth = require('../model/auth.js')
const jwt = require('jsonwebtoken');
const {jwtscret} = require('../Config/Config.js')

router.post('/signup',async(req,res)=>{
    try {
        const{name,email,password,dob} = req.body;
        const existuser = await auth.findOne({email:req.body.email})
        if(existuser){
            return res.status(400).json({error:"user already register"})
           
        }


        const role = email === "uk99027@gmail.com" ? "admin" : "regular";
       const user = new auth({
        name,
        email,
        password,
        dob,
        role
       })
       await user.save()
       res.status(202).json({
        message:"user successfully registerd",name:user.name,role:user.role})
       console.log("user registerd")
        
    } catch (error) {
        res.status(404).json({message:"error while registering user"})
        console.log("error while registering",error)
        
    }
})

router.post('/login',async(req,res)=>{
    try {
        const user = await auth.findOne({email:req.body.email})

        if(!user){
            return res.status(200).json({message:"user not found"})
        }

        if(req.body.password !== user.password){
            return res.status(200).json({message:"password is incorrect"})
        }
   const payload = {
  id : user._id, role:user.role
   }

   const token = jwt.sign(payload,jwtscret,{expiresIn:'1h'})
   
        const rolemeassage = user.email === "uk99027@gmail.com" ? "wellcome admin" :"wellcome regular"
    
    
     res.status(200).json({
    message: rolemeassage,
    role:user.role,
    name: user.name,
    user : user.id,
    email:user.email,
    password:user.password,
    dob:user.dob,
    token:token
    })

    }
   

     

     catch (error) {
         res.status(303).json({message:"error while login",error})
         console.log(error)
    }
})
module.exports = router;