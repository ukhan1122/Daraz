import React, { useState } from "react";
import './Signup.css'
import axios from "axios";

const Signup = ()=>{
    const [formdata,setformdata]=useState(
        {   name:"",
            email:'',
            password:"",
            dob:""
        }
    )
 const handlechange =(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
 }
    const handlesubmit =async()=>{
        try {
            const response = await axios.post('http://localhost:8000/authentication/signup',formdata)
            console.log(response.data)
        } catch (error) {
            console.log('error while login',error)
            
        }
    }

    return(
        <div>
            <div>
                <div className="account">
                    <div className="acount-name"> 
                        <div>
                        <h2>Create your Daraz account</h2></div>
                        <div>
                            <span>already member? <a href="">Login</a> here</span>
                        </div>
                    
                    </div>
                 
              
                    <form onSubmit={handlesubmit}>
                    <div className="account-form">
                        <div className="first-row">
                            <div>    <label htmlFor="">Phone Numbers or email*</label>
                            <input type="text" name="email" onChange={handlechange} placeholder="text" /></div>
                            <div> <label htmlFor="">Verification code from whatsapp or email*</label>
                            <input type="number"  name="number"/></div>
                             <div>   <label htmlFor="">Password*</label>   
                             <input type="password" name="password" onChange={handlechange} /></div>
                             <div>  <label htmlFor="" >Birthday*</label>
                             <input type="date" name="dob" onChange={handlechange}/></div>   
                            
                           
                        </div>
                        <div className="second-row">
                            <label htmlFor="">Full Name*</label>
                            <input type="text"  name="name" onChange={handlechange}/>
                            <div className="checkbox">  <input type="checkbox" />
                            <span>I'd like to receive exclusive offers and promotions via SMS</span>
                           </div>
                           <div>
                            <button className="signup-btn">SIGN UP</button>   
                            <span>By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy Policy</span>   
                            <span className="orsignp">or,signup with</span>
                            <div className="double-btn">
                            <button>Facebook</button>
                            <button>Google</button>
                            </div>
                            
                             </div> 
                            </div>  
                           
                             </div>          
                    </form>
                </div>
            </div>
            </div>
        
    )
}
export default Signup;