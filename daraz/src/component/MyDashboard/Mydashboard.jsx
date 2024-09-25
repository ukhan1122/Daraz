import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import {NavLink,Route,Routes} from 'react-router-dom'
import './MyDashboard.css'
import Myorder from "./Myorder";
import CreateCategory from "./CreateCategory";
import CreateProduct from "./CreateProduct";

const Mydashboard = () =>{
  const userState = useSelector((state) => state.user);
  const user = userState?.user;  
  const userrole = user?.role || '';  
  console.log("user role at dashboard",userrole)

  if (!userrole) {
    return <p>Please log in to access the dashboard.</p>;
}
    return(
           <div className="Mydashboard" style={{ display: "flex" }}>
       <div className="leftsidebar">  
        <NavLink to="profile" className={({ isActive }) => isActive ? "active-link" : ""}>My Profile</NavLink>
        <NavLink to="Order" className={({ isActive }) => isActive ? "active-link" : ""}>My Order</NavLink>
        {userrole === "admin" && (
          <>
                    <NavLink to="CreateCategory" className={({ isActive }) => isActive ? "active-link" : ""}>Create Category</NavLink>
                 <NavLink to="CreateProduct" className={({ isActive }) => isActive ? "active-link" : ""}>Create Product</NavLink>
           </>
        )}
      </div>

      <div className="content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="Order" element={<Myorder/>}/>
          {userrole === "admin" && (
            <>
            
          <Route path="CreateProduct" element={<CreateProduct/>}/>
          <Route path="CreateCategory" element={<CreateCategory/>}/>
            </>
          )}
        </Routes>
      </div>
        </div>
    )
}
export default Mydashboard;