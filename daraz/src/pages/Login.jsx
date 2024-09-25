import React, { useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import {useNavigate} from 'react-router-dom'

import './Signup.css'
import './login.css'

const Login = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[formdata,setfordata] = useState(
        {
            email:"",
            password:""
        }
    )

 const handlechange =(e)=>{
    setfordata({...formdata,[e.target.name]:e.target.value})
 }

    const handlesubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/authentication/login',formdata)
            console.log("login data",response.data)
            dispatch(login(response.data))
            navigate('/')
            
        } catch (error) {
            console.log("error in login",error)
            
        }
        

    }

    return(
        <div>
            <div>
                <div className="account">
                    <div className="acount-name"> 
                        <div>
                        <h2>Welcome to Daraz! Please login.</h2></div>  
                        <div>
                            <span>New member? <a href="">Register</a> here</span>
                        </div>
                    
                    </div>
                 
              
                    <form onSubmit={handlesubmit}>
                    <div className="account-form">
                        <div className="first-row">
                            <div>    <label htmlFor="">Phone Numbers or Email*</label>
                            <input type="text" name="email" onChange={handlechange}  placeholder="Please enter your phone or email" /></div>
                        
                             <div>   <label htmlFor="">Password*</label>   
                             <input type="password" name="password" onChange={handlechange} placeholder="Please enter your password"/></div>
                            
                            
                           
                        </div>
                        <div className="second-row">
                         
                        
                           <div>
                            <button className="login" onClick={handlesubmit}>Login</button>   
                            <span className="orlogin">or,login with</span>
                         
                            <button className="double-btn-facebook">Facebook</button>
                            <button className="double-btn-google">Google</button>
                            
                            
                             </div> 
                            </div>  
                           
                             </div>          
                    </form>
                </div>
            </div>
            </div>
        
    )
}
export default Login;