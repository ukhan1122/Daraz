import React, { useEffect, useState } from "react";
import flash1 from '../../images/categoriesimg/flash1.png'
import flash2 from '../../images/categoriesimg/flash2.jpg'
import flash3 from '../../images/categoriesimg/flash3.jpg'
import flash4 from '../../images/categoriesimg/flash4.jpg'
import flash5 from '../../images/categoriesimg/flash5.jpg'
import flash6 from '../../images/categoriesimg/flash6.jpg'
import './Flashsale.css'


const FlashSale = () =>{
 const [sec, setsec] = useState(0)
 const [mint, setmint] = useState(0)
 const [hour, sethours] = useState(0)


 useEffect (()=>{
    const interval = setInterval(() => {
    
        setsec((prevSeconds)=> prevSeconds + 1)
    
        if(sec === 59 ){
            setsec(0);
            setmint((prevmints) => prevmints + 1)
    
        }
    
        if(mint === 59){
            setsec(0)
            setmint(0)
            sethours((prevhour)=> prevhour + 1)
        }
      }, 1000);
      return () => clearInterval(interval)


 },[sec,mint,hour])
  

    return(
        <div className="FlashSale">
            
            <div className="FlashSpan"><span>Flash Sale</span></div>
            <div className="FlashRow">
                <div className="firstflash">
                <div className="timer"><span>On Sale Now</span>
                <div className="Endingtimer"> 
                    <span>Ending in</span> {hour.toString().padStart(2, "0")}:
        {mint.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}
        </div>
                 </div>
                <div><button>Shop More</button></div>
                </div>
                <div className="imageclass">
                    <div className="imagerow"><a href=""><img src={flash1} alt="" /></a>
                    <span>Airpro Double and Airpods Wireless Bluetooth Hand  practive</span>
                    <div>
                    <span>Rs. 594</span></div>
                    <div className="discount"><span>Rs.894</span>
                    <span> -5%</span></div>
                    </div>
                    <div className="imagerow"><a href=""><img src={flash2} alt="" /></a>
                    <span>Airpro Double and Airpods Wireless Bluetooth Hand  practive</span>
                    <div>
                    <span>Rs. 594</span></div>
                    <div className="discount"><span>Rs.894</span>
                    <span> -5%</span></div>
                    </div>

                    <div className="imagerow"><a href=""><img src={flash3} alt="" /></a>
                    <span>Airpro Double and Airpods Wireless Bluetooth Hand  practive</span>
                    <div>
                    <span>Rs. 594</span></div>
                    <div className="discount"><span>Rs.894</span>
                    <span> -5%</span></div>
                    </div> <div className="imagerow"><a href=""><img src={flash4} alt="" /></a>
                    <span>Airpro Double and Airpods Wireless Bluetooth Hand  practive</span>
                    <div>
                    <span>Rs. 594</span></div>
                    <div className="discount"><span>Rs.894</span>
                    <span> -5%</span></div>
                    </div> <div className="imagerow"><a href=""><img src={flash5} alt="" /></a>
                    <span>Airpro Double and Airpods Wireless Bluetooth Hand  practive</span>
                    <div>
                    <span>Rs. 594</span></div>
                    <div className="discount"><span>Rs.894</span>
                    <span> -5%</span></div>
                    </div> <div className="imagerow"><a href=""><img src={flash6} alt="" /></a>
                    <span>Airpro Double and Airpods Wireless Bluetooth Hand  practive</span>
                    <div>
                    <span>Rs. 594</span></div>
                    <div className="discount"><span>Rs.894</span>
                    <span> -5%</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlashSale