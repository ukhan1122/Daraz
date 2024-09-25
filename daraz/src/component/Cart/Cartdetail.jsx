import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Cartdetail.css'
import { placeorder, settotalprice } from "../../redux/OrderSlice";
import { useNavigate } from "react-router-dom";
import axios  from 'axios';


const Cartdetail = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Cartitem = useSelector((state)=> state.cart.items)
    
    const {user} = useSelector((state)=>state.user)
    const userid = user ? user.user : null
    const token = user ? user.token : null
    console.log("toekn and userid", token,userid)
    console.log("cart detail ", Cartitem)

      const totalCartPrice = Cartitem.reduce((total, item) => {
        return total + item.totalprice;
    }, 0);

        console.log("total price of cart",totalCartPrice)
    const handleplaceorder = async() =>{
        try {
            const orderpayload = {
                user : userid,
                totalprice :totalCartPrice,
                products: Cartitem.map(item =>({
                    product : item.id,
                    quantity:item.quantity,
                    price:item.totalprice
                }))
            }
            console.log("Order Payload:", orderpayload); // Log payload before sending

            const response = await axios.post('http://localhost:8000/order/createorder',
                orderpayload,
               
              
            
                {
                    headers:{
                        Authorization:` ${token}`
                    }
                }
            
            )
            dispatch(settotalprice(totalCartPrice))
            dispatch(placeorder({
                products:Cartitem.map(item =>({
                    product : item.id,
                    quantity:item.quantity
                })),
                totalprice:totalCartPrice
                
            }))
        console.log("order created successfuly",response.data)
        navigate('/Mydashboard/Order')
        } catch (error) {
            console.log("faild to place order",error)
        }
        navigate("/Mydashboard/Order")
    }    
return(
    <div  className="cart-container">
        <h2>Cart details</h2>

        {Cartitem.length > 0 ? (
            <div>
                {Cartitem.map((item)=>(
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Quantity : {item.quantity}</p>
                        <p>Price: ${item.totalprice.toFixed(2)}</p>
                    </div>
                ))}
                 <div className="cart-total">
                        <h3>Total Price of Cart: ${totalCartPrice.toFixed(2)}</h3>
                        <button onClick={handleplaceorder}>Place Your Order</button>
                    </div>
               
            </div>

        )
        :(
         <div className="empty-cart">
            <p>your cart is empty</p>
         </div>
        )}
    </div>
)
}

export default Cartdetail