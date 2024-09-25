import React ,{useEffect,useState}from "react";
import './Categoreislink.css'
import { useSelector } from 'react-redux';
import axios  from 'axios';
import { Link } from "react-router-dom";


const CategoriesLink = () =>{
    const [products,setproduct] = useState([])
 
    // const {products}  = useSelector((state)=>state.product)
   
    const handleproduct = async() =>{   

        try {
            const response = await axios.get('http://localhost:8000/task/getallproduct')
       
            console.log("all product fettched ", response.data)
            setproduct(response.data.product)
        } catch (error) {
            console.log("error in console",error)
        }
    }
const getImgsrc = (photo)=>{
    if(photo && photo.data && photo.contentType){
        return `data:${photo.contentType};base64,${photo.data}`

    }

}

useEffect(()=>{
    handleproduct()
},[])
    return(
        <div className="CategoriesLink">
            <div className="categoriesdata">
                <div><span>Categories</span></div>
                <div className="imagecategory">
                   {products.length > 0 ? (
                    products.map((item, index) => (
                        item && item.photo ? (

                            <div key={index}>
                                 <Link to={`/product/${item._id}`}>
                                 <img src={getImgsrc( item.photo) || 'fallback-image-url.jpg'} alt={item.title} />
                                <label htmlFor="">{item.title}</label>
                            
                                 </Link>
                              
                        </div>

                        ) :(
                            <div key={index}>
                                    <p>Product data is missing</p>
                                </div>

                        )
                       
                    ))
                   ) : (
                       <p>No products found</p>
                   )}
                </div>
            </div>
        </div>
    );
};
export default  CategoriesLink