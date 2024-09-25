import React from "react";
import { Link } from "react-router-dom";
import logo from  '../../images/logo.png'
import qrcode from '../../images/qrcode.png'
import appimage from '../../images/appimage.png'
import app from '../../images/app.png'
import './Headersmall.css'

const Headersmall = () => {
  return (
    <div className="Header-small">
        <div className="classes"> 
            <div className="Seller-class">
        <Link to="/seller">Become a Seller</Link>
      </div>
      <div className="affiliate-class">
        <Link to="/affiliate">Daraz Affiliate Program</Link>
      </div>
      <div className="help-class">
        <Link to="/support">Help & Support</Link>
      </div>
      <div className="partner-class">
        <Link to="/logistics">Daraz Logistics Partner</Link>
      </div></div>
      
       <div className="logo-link-app">
         <div className="app-logo">
        <img src={logo}></img>
        <Link to="apps">Save More on app</Link>
        <div className="showmore">
          <div className="appimage"><img  src={appimage} alt="" />
          <span>Enjoy more discout with Daraz App</span>
          </div>
          <div className="appcode">
           <img src={qrcode} alt="" />
           <img src={app} alt="" />
          </div>
        </div>
      </div></div>
     
    </div>
  );
};

export default Headersmall;
