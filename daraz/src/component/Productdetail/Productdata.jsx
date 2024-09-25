import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Productdata.css'
import { useDispatch } from "react-redux";
import { additemcart } from "../../redux/Cartslice";



const Productdata = () =>{
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log("product id ",productId)
    const [ product , setproduct] = useState(null)

    const Addcart = ()=>{
        dispatch(additemcart({
            id:productId,
            title:product.title,
            price:product.price
        }))

    }

 useEffect (()=>{
    
    const handleproduct = async() =>{
        try {
            const response = await axios.get(`http://localhost:8000/task/get/${productId}`)
           console.log("product detail", response.data)
           setproduct(response.data.product)
        
        } catch (error) {
            console.log("eroor while fetching prdocut ", error)
        }
    }
 handleproduct()
 },[productId])
 if (!product) {
    return <div>Loading...</div>;  
}
    return(
        <div className="productdata"> 
        <div className="firstdiv"> <img src={`data:${product.photo.contentType};base64,${product.photo.data}`} alt={product.title} />
        <h2>{product.title}</h2>
        </div>
           <div className="seconddiv">
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            
            <button onClick={Addcart}>Add Cart</button>
          
            </div>
        </div>
    )
}

export default Productdata