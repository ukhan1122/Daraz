import React, { useEffect, useState } from "react";
import GradeIcon from '@mui/icons-material/Grade';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CardData from "../../Dummydata/Card";
import './Foru.css'

const Foru = () =>{
    const[showmore,setshowmore] = useState(false)

    const handleshowmore = () =>{
        setshowmore(!showmore)
    }
    if (!Array.isArray(CardData) || CardData.length === 0) {
        return (
            <div className="Foru">
                <p>No data available.</p>
            </div>
        );
    }

    // Debug: Log CardData to console to verify its contents
    console.log("CardData:", CardData);



    return(
        <div className="Foru">
            
            <div className="FlashSpan"><span>Just For You</span></div>
            <div className="FlashRow ForuFlash">
              {CardData.slice(0,showmore ? CardData.length : 12).map(card=>(
                                   <div className="imageclass For-u" key={card.id}>
                                   <div className="imagerow"  key={card.id}>
                                    <a href="#"><img src={card.src} alt={card.alt} /></a>
                                   <span>{card.description}</span>
                                   <div>
                                   <span>{card.price}</span></div>
                                   <div className="discount"><span>{card.discount}</span>
                                   <span>{card.percent}</span></div>
                               
                            <div className="star">
                                <span><GradeIcon className="gradicon"/></span>
                                <span><GradeIcon className="gradicon"/></span>
                                <span><GradeIcon className="gradicon"/></span>
                                <span><GradeIcon className="gradicon"/></span>
                                <span><StarHalfIcon className="gradicon"/></span>
                            </div>
                                   </div>  
                                
                               </div>
              ))}

              
         
             

              
             
            </div>
            {CardData.length > 6 && (
                <div className="showmore-btn">
                    <button onClick={handleshowmore}>
                        {showmore ? "Load Less" : "Load More"}
                    </button>
                </div>
            )}
        </div>
    )
}
export default Foru