import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person'
import LanguageIcon from '@mui/icons-material/Language'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Headersmall from "./Headersmall";
import dl from '../../images/dl.png'
import { useSelector } from "react-redux";
import './Header.css'
const Header = () =>{
      const[showusermenu,setshowusermenu] = useState(false)
      const totalquantity = useSelector((state)=>state.cart.totalquantity)
    const user = useSelector((state)=> state.user.user)
    const isauthenthcated = useSelector((state)=> state.user.isauthenticated)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.user-dashboard') === null) {
                setshowusermenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return( 
        <div className="sticky"> 
            
        <Headersmall/>
    <div className="header">
        <div className="logo">
            <Link to='/' className="logo-link">
            <img src={dl} alt="" />
            </Link>
        </div>
        <div className="categories">
        <select>
                <option value="en">Categories</option>
                <option value="ur">Cloths</option>
                <option value="pashto">Books</option>
            </select>
            <ArrowDropDownIcon className="arrow-icon-categories"/>
        </div>
        <div className="search-bar">
            <input type="text"  placeholder="Search in Daraz" />
          
        </div>
        {isauthenthcated && user ? (
                <div className="user-dashboard" 

          onClick={() => setshowusermenu(!showusermenu)} 
                
                >
                    
                    <span  className="username">{user.name}</span>
                    <ArrowDropDownIcon className="arrowicon"/>
                 
                    {showusermenu && (
                        <div className="usermenu">
                        <Link to='/Mydashboard'>My Dashboard</Link>
                        <Link to='/login'>Sign out</Link>
                       </div>
                    
                    )}  
                </div>
           

        ):
        (
            <div className="user-section">
            <Link to='/login' className="user-button">
            <PersonIcon/>
            <span>Login</span>
            </Link> 
            <Link to='/signup' className="user-button signup">
            <span>Signup</span>
            </Link>
        </div>
        )
    }
     
        <div className="language-preferencess">
            <LanguageIcon className="language-icon "/>
            <select>
                <option value="en">EN</option>
                <option value="ur">urdu</option>
                <option value="pashto">pashto</option>
            </select>
            <ArrowDropDownIcon className="arrow-icon"/>
        </div>
        <Link to='/cart'>
        <div className="shopping-cart">
            <ShoppingCartIcon/>
            {totalquantity > 0 && <span className="cart-count">{totalquantity}</span> }
        </div>
        </Link>
     
      </div>
    </div>
    )
}
export default Header;;