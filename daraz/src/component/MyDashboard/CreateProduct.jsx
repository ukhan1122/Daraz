import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Createproduct.css'
import { createproductfailure, createproductstart, createproductsuccess } from "../../redux/ProductsSlice";

const CreateProduct = () =>{
    const [ category ,setcategory] = useState([])
    const [subcategories,setSubcategories] = useState([])
    const dispatch  = useDispatch();
    const {user} = useSelector((state)=>state.user)
    const token = user ? user.token : null
    const userid = user ? user.user : null
    
const  [product ,setproduct] = useState({
    title :"",
    description:"",
    completed:false,
    price:0,
    category:"",
    subcategory:"",
    photo:null,
    quantity:0
})
 const handlechange =(e)=>{
    const{name,type,value,checked} = e.target;
    setproduct({
        ...product,
        [name]:type === "checkbox" ? checked : value
    })
 }
 const handlefilechange = (e)=>{
    setproduct({
        ...product,
        photo:e.target.files[0]
    })

 }
const handlesubmit = async(e) =>{

    e.preventDefault()

    const formdata = new FormData();
    formdata.append("title",product.title)
    formdata.append("description",product.description)
    formdata.append("completed",product.completed)
    formdata.append("price",product.price)
    formdata.append("category",product.category)
    formdata.append("quantity",product.quantity)
    formdata.append("photo",product.photo)
    dispatch(createproductstart())
   try {
      const response = await axios.post('http://localhost:8000/task/createproduct',formdata,{
        headers:{
            Authorization:` ${token}`
        }
      }
    
    )
    alert("product created")
    console.log("product created",response.data)
    dispatch(createproductsuccess(response.data))
    setproduct({
        title: "",
        description: "",
        completed: false,
        price: 0,
        category: "",
        photo: null,
        quantity: 0
    });
    } catch (error) {

    console.log("error while creating product",error)
    dispatch(createproductfailure(error.message))
    
   }

}

const handlecategory = async() =>{
    
    try {
        const response = await axios.get(`http://localhost:8000/category/get/${userid}`,
            {
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        
        if (Array.isArray(response.data.category)) {
            setcategory(response.data.category); 
        }
        else {
            console.warn("Received data is not an array:", response.data);
            setcategory([]); 
        }
    } catch (error) {
        console.log("error while getting category",error)
    }
}
useEffect(() => {
    if (userid) {
        handlecategory();
    }
}, [userid]);

const handlesubcategory = async(Categoryid) =>{
    setproduct({...product,category:Categoryid})
    try {
        const response = await axios.get(`http://localhost:8000/sub/subcatgory/${Categoryid}`,
            {
                headers:{
                Authorization: `${token}`

            }
        }

        )
        
     console.log("subcategories data lista",response.data)

        if (Array.isArray(response.data.subcategories)) {
            setSubcategories(response.data.subcategories) // Ensure it's an array before setting it
        } else {
            console.warn("Subcategories response is not an array");
            setSubcategories([]); // Handle the case where the response is not an array
        }
    }
    
    catch (error) {
        console.log("error while geting subcategory",error)
        
    }
}
    return(
          <div className="Createproduct">
            <form onSubmit={handlesubmit} >

                 <div className="input-data">
                    <div>
                        <label htmlFor="">Product Name</label>
                        <input type="text" name="title" value={product.title} onChange={handlechange}/>
                    </div> 
                    <div>
                        <label htmlFor="">Description</label>
                        <input type="text" name="description" value={product.description} onChange={handlechange} />
                    </div>
                 
                    <div>
                        <label htmlFor="">Price</label>
                        <input type="number" value={product.price} name="price" onChange={handlechange}/>
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <select name="category" value={product.category}
                         onChange={(e)=>{
                            handlechange(e);
                            handlesubcategory(e.target.value)

                         }}>
                            <option value="">Select a category</option>
                            {category.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.Name}
                                </option>
                            ))}
                        </select>  </div> 
                        <div>
                            <label htmlFor="">subcategory</label>
                            <select name="subcategory" onChange={handlechange} value={product.subcategory} id="">

                                <option value="">selct subcategory</option>
                                {subcategories.map((subscat)=>(
                                    <option key={subscat._id} value={subscat._id}>
                                        {subscat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    <div>
                        <label htmlFor="">Quantity</label>
                        <input type="number" name="quantity" value={product.quantity} onChange={handlechange}/>
                    </div>
                    <div>
                        <label htmlFor="">Photo</label>
                        <input type="file" name="photo"   onChange={handlefilechange}/>
                    </div>
                 </div>

                 <button type="submit">Create Product</button>
            </form>

          </div>

    )
}

export default CreateProduct;