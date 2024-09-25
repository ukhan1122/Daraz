import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Myorder.css';
import axios from "axios";

const Myorder = () => {
    const [orders, setOrders] = useState(null);
    const userState = useSelector((state) => state.user);
    const user = userState?.user; 
    const token = user ? user.token : null;
    const isAdmin = user?.role === "admin"; 
    console.log("User from Redux:", userState);
    console.log("User Role:", user?.role);
    console.log("Is Admin:", isAdmin);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get('http://localhost:8000/order/all', {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                console.log("Order data:", response.data);
                setOrders(response.data);
            } catch (error) {
                console.log("Error while getting orders:", error);
            }
        };
        fetchOrder();
    }, [token]);

    const updatestatus = async(orderId,newstatus)=>{

    console.log("Updating status for order:", orderId);
    console.log("New status:", newstatus);

        try {
            const response = await axios.put(`http://localhost:8000/order/order/${orderId}`,{
                status:newstatus
            })
         console.log("order status change",response.data)
        } catch (error) {      
            console.log('Error while changing status', error);
  
            
        }
    }

    return (
        <div className="order-container">
            {orders && orders.length > 0 ? (
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>

                            <th>Status</th>
                            {!isAdmin && (
                                <>
                                    <th>Total Price</th>
                                    <th>Product ID</th>
                                    <th>Quantity</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id || index} className="order-item">
                                <td>
                                    <h5>{order._id}</h5>
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <select 
                                        name="" id="" 
                                        value={order.status}
                                        onChange={(e)=> updatestatus(order._id,e.target.value)}>
                                            <option value="Pending">Pending</option>
                                            <option value="Cancel">Cancel</option>
                                            <option value="Success">Success</option>
                                        </select>
                                    ):(
                                        <p>{order.status}</p>
                                    )}
                                </td>
                                {!isAdmin && (
                                    <>
                                        <td>
                                            <p>{(order.totalprice !== undefined && order.totalprice !== null)
                                                ? order.totalprice.toFixed(2)
                                                : "N/A"}</p>
                                        </td>
                                        {order.products && order.products.length > 0 ? (
                                            <>
                                                <td>
                                                    <p>{order.products[0]?._id || 'No Title'}</p>
                                                </td>
                                                <td>
                                                    <p>{order.products[0].quantity || 'No Quantity'}</p>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>No Product Id</td>
                                                <td>No Quantity</td>
                                            </>
                                        )}
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    <p>No orders found</p>
                </div>
            )}
        </div>
    );
}

export default Myorder;
