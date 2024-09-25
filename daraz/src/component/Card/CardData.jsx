import React from "react";
import './Card.css'
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft';
import LabelIcon from '@mui/icons-material/Label';
import VerifiedIcon from '@mui/icons-material/Verified';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const CardData = () =>{

    return(
        <div className="cardcss">
            <div className="card-data">
                <ul>
                    <li><a href=""><GppGoodIcon/> Safe Payments</a></li>
                    <li><a href=""><LocalShippingIcon/> Nationwide Delivery</a></li>
                    <li><a href=""><UTurnLeftIcon/> Free & Easy Returns</a></li>
                    <li><a href=""><LabelIcon/> Best Price Guaranteed</a></li>
                    <li><a href=""> <VerifiedIcon/> 100% Authentic Products</a></li>
                    <li><a href=""> <VerifiedUserIcon/> Daraz Verified</a></li>
                </ul>
              
            </div>
        </div>
    )
}

export default CardData