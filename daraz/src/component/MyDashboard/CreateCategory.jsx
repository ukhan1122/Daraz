import React, { useState } from "react";
import  axios  from 'axios';
import { useSelector } from 'react-redux';
import './Createcategory.css'
import Deleteicon from '@mui/icons-material/Delete'


const CreateCategory = () =>{
    const { user } = useSelector((state) => state.user);
    const token = user ? user.token : null; 
    const [Name, setName] = useState('')
    const [Slug, setSlug] = useState('')
    const[subcatgories , setSubcategories] = useState([""])
   
    const handlesubcategory = () =>{
        setSubcategories([...subcatgories,""])
    }
   const removesubcategory = (index) =>{

    const  updatecategory = subcatgories.filter((_,i)=> i !== index)
    setSubcategories(updatecategory)
   }
   const handlechangesubcategory = (index,value) =>{
    const updatecategorysub = [...subcatgories]
    updatecategorysub[index] = value;
    setSubcategories(updatecategorysub)
   }
    const handlesubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/category/createcategory',{
                Name:Name,
                Slug:Slug,
                subcatgories:subcatgories.filter(Boolean)

            },
            {
                headers: {
                    Authorization: `${token}`,  
                }
            }
           
        );
            // alert("category created successfully")
            setName('')
            setSlug('')
            setSubcategories([""])
        } catch (error) {
            console.error("Error creating category:", error);
      

            
        }

    }

    return(
        <div className="createcategory">
            <h2>Create Category</h2>
            <form onSubmit={handlesubmit}>
            <div className="main-column">
                <div className="left-column">

                <label htmlFor="">Category Name:</label>
                <input type="text" 
                value={Name}
                onChange={(e)=>setName(e.target.value)}
                /> 
                <label htmlFor="">Slug:</label>
                <input type="text"
                value={Slug}
                onChange={(e)=>setSlug(e.target.value)}
                />
                </div>
                
                <div className="right-column">
                <label htmlFor="">Sub scategory:</label>
                 <div className="subcategory-container">
                 {subcatgories.filter(sub => sub.trim() !== "").map((sub,index)=>(
                    <div key={index} className="subcategory">
                    <input type="text"
                value={sub}
                placeholder="enter subcategory"
                onChange={(e)=>handlechangesubcategory(index,e.target.value)}
                />
               
                    <Deleteicon 
                    className="remove-icon"
                    onClick={()=>removesubcategory(index)}
                    
                    />
                
                   
                        </div>

               
                 ))}
                 </div>
                 <div className="subcategory">
                <input 
                    type="text"
                    placeholder="Enter subcategory"
                    value={subcatgories[subcatgories.length - 1]}
                    onChange={(e) => handlechangesubcategory(subcatgories.length - 1, e.target.value)}
                />
            </div>
                
                 <button  type="button" onClick={handlesubcategory}>
                    Add subcategory
                 </button>
                

            </div>
                </div>
                
            <button type="submit">Create Category</button>
        
            </form>
            </div>
           
    )
}

export default  CreateCategory