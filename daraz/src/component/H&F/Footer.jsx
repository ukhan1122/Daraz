import React from "react";
import qrcode from '../../images/qrcode.png'
import easymonthly from '../../images/easymonthly.jpeg'
import jazzcash from '../../images/jazzcash.jpeg'
import easypisa from '../../images/easypisa.png'
import mastercard from '../../images/mastercode.png'
import unipay from '../../images/unipay.png'
import hbl from '../../images/hbl.png'
import visa from '../../images/visa.png'
import app from '../../images/app.png'
import Youtube from '@mui/icons-material/YouTube'
import Facebook from "@mui/icons-material/Facebook"
import Twitter from '@mui/icons-material/Twitter'
import Instagram from '@mui/icons-material/Instagram'
import WebsiteIcon from '@mui/icons-material/Public'; // Assuming 'Website' icon is represented as 'Public' in MUI

import'./Footer.css'

const Footer = () =>{

    return( 
    <div className="Footer">
        <div className="Footer-row">
            <div className="CustomerCare"> 
                <div><span>Customer Care</span></div> 
                <div className="Link-Help">
                  <a href="">Help Center</a>
                  <a href="">How to Buy</a>
                  <a href="">Corporate & Bulk Purchasing</a>
                  <a href="">Returns & Refunds</a>
                  <a href="">Daraz Shop</a>
                  <a href="">Contact Us</a>
                  <a href="">Purchase Protection</a>
                  <a href="">Daraz Pick up Points</a>
                </div>
                <div><span>Make Money With Us</span></div>
                <div>
                    <a href="">Daraz University</a>
                    <a href="">Sell on Daraz</a>
                    <a href="">Sell on Daraz</a>
                </div>
                </div>
            <div className="Daraz">
                <div><span>Daraz</span></div>
                <div>
                    <a href="">about</a>
                    <a href="">Digital Payments</a>
                    <a href="">Daraz Blog</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">NTN Number : 4012118-6</a>
                    <a href="">STRN Number : 1700401211818</a>
                    <a href="">Online Shopping App</a>
                    <a href="">Online Grocery Shopping</a>
                    <a href="">Daraz Exclusive</a>
                    </div>    
         
            </div>
            <div className="DarazInternational">
                <div><span>Daraz International</span></div>
                <div>
                    <a href="">Pakistan</a>
                    <a href="">Bangladesh</a>
                    <a href="">Sri Lanak</a>
                    <a href="">Mynammar</a>
                    <a href="">Nepal</a>
                </div>
                <div><span>Payment Methods</span></div>
            <div className="payment-image">
                <a href=""><img src={easymonthly} alt="" /></a>
                <a href=""><img src={visa} alt="" /></a>
                <a href=""><img src={mastercard} alt="" /></a>
                <a href=""><img src={easypisa} alt="" /></a>
                <a href=""><img src="" alt="Daraz Wallet" /></a>
                <a href=""><img src={jazzcash} alt="" /></a>
                <a href=""><img src={unipay} alt="" /></a>
                <a href=""><img src={hbl} alt="" /></a>
            </div>
            </div>
            <div className="Exclusive Deal and Offers">
               <div><span> Exclusive Deals and Offers!</span></div>
               <div className="qr-image">
                <a href=""><img src={qrcode} alt="" /></a>
                <a href=""><img src={app} alt="" /></a>
               </div>
               <div><span>Happy Shoping</span></div>
               <div className="Follow"><span>Follow Us</span></div>
               <div className="social-icon">
                <a href=""><Youtube className="youtube"/></a>
                <a href=""><Facebook className="facebook"/></a>
                <a href=""><Twitter className="twitter"/></a>
                <a href=""><Instagram className="instagram"/></a>
                <a href=""><WebsiteIcon className="website"/></a>
               </div>
               </div>
        </div>
        <div className="Fotter-Bottom">
            <div className="footer-data">
                <div><span>How Daraz Transformed Online Shopping in Pakistan</span></div>
                <div>
                    <a href="">Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.</a>
                </div>
                
                <div> <h3>What Makes Us Different from Other Online Shopping Platforms?</h3><a href="">Select from the Largest Online Marketplace in Pakistan
                With over 15 million products to select from, Daraz offers its customers the most comprehensive listing of products in the country. Whether you’re looking for electronics, apparel, appliances, or groceries – there is something for everyone
          </a></div>   <div> <h3>Hassle Free Delivery</h3><a href="">
             Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of your order, we have a simple 7-day return or exchange policy.
        </a>   </div>  <div><h3>Payment Options to Suit Every Style</h3><a href="">
             You can choose to pay through a credit/debit card, opt for cash on delivery or even go for EMI (easy monthly instalments). You can also avail exclusive offers by downloading Daraz Wallet – a closed loop digital wallet </a></div>    </div>
            <div className="footer-data">
                 <div><a href="">that offers you a secure, easy way to make payments. We also have easypaisa & jazzcash payment method for our customers' eas</a></div>
               <div><h3>Shop from Verified Vendors</h3><a href="">
               Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!</a></div>
            <div><h3>Shop Around the World with Daraz Global Collection</h3><a href="">
            International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.</a></div>
             <div><h3>Avail Exclusive Discounts, Offers, and Promotions</h3><a href="">
             Online shopping with Daraz means you get the chance to avail exclusive online-only promotional packages as well as discount vouchers from our vendors when you shop from their pages. Our flash sales give you customized product offers all curated with the help of our advanced AI technology so you always have deals you’ll actually be interested in!</a></div>
            <div><h3>Buy Value, not Just Goods with Daraz Care</h3><a href="">
            Daraz does not just cater online shopping in Pakistan but also aims to simplify the way you give back to society. With charities spanning across sectors of education, health care, environmental preservation, and shelters, you can choose to make a big difference with a few, simple clicks.</a></div>
            <div><h3>Simplify Corporate Purchases</h3><a href="">
            Who says corporate purchases need to be a complicated affair? When you opt for Daraz Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs. We’re proud to be working with some of the most prestigious organizations in Pakistan across a number of different industries.</a></div>
            </div>

            <div className="footer-data">
                <div><span>Top Categories & Brands</span></div>
            <div> <h3>MOBILE PHONES IN PAKISTAN</h3> <a href="">
            Apple iPhones, Honor Mobiles, Huawei Mobiles, Tecno Mobiles, Redmi Mobiles, Xiaomi Mi Mobiles, Nokia Mobiles, OnePlus Mobiles, Oppo Mobile Phones, Realme Mobiles, Samsung Mobile Phones, Vivo Mobile Phones, Mobile Accessories, Smart Watches</a> 
            </div>
            <div><h3>LATEST LAPTOPS</h3><a href="">
            Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming Graphic Cards, lenovo ideapad 3, Macbook Pro 13, Hp Probook 650 G2</a></div>
             <div><h3>LED TV</h3><a href="">
             Changhong Led Tv, LG Led Tv, Samsung Led Tv, Sony Led Tv, TCL LED TVs</a></div>
             
             <div><h3>HOME APPLIANCES</h3><a href="">
             Microwave oven, Geyser, Heater, Refrigerators, Deep Freezers, Generators, Water Dispensers, Fans, Room Cooler, Table Fans, Wall Fans, Exhaust Fans, Pedestal Fans, Window Ac, Solar Panel, Washing Machine</a></div>
             <div><h3>HEALTH & BEAUTY</h3><a href="">
             sunisa foundation, Biofad, janssen facial kit, Glutathione Injection, Glutathione Cream Sauvage, Glutathione Tablets, Glutathione Soap, Infrared Thermometers, N95 Mask</a></div>
             <div><h3>TRENDING</h3><a href="">
             June Shopping Expo 2023, Azaadi Sale 2022, Shopping Expo, 11 11 Sale, 12.12 Sale, Live Cricket Streaming, Online Bills, Core I5 Laptop, Gtx 1060, Samsung A32, Samsung A51, Samsung A52, Samsung A71, Samsung A72, Samsung M31, Samsung S20, Samsung S20 Ultra 5G, Samsung S21, Samsung S21 Ultra, Samsung Z Flip, Tecno Camon 17, Tecno Spark 6, Vivo V20, Poco X3 Pro, Vivo V21, Vivo V21E, Vivo X70 Pro, Vivo Y12, Vivo Y12S, Vivo Y1S, Vivo Y20, Vivo Y51, Vivo Y51S, Oppo F19 Pro, Oppo Reno 6, Xiaomi Poco F3, Xiaomi Poco M3, Xiaomi Poco X3, Xiaomi Poco X3 Gt, Xiaomi Redmi 9C, Xiaomi Redmi Note 10 Pro, Sharp Aquos R2</a></div>
             </div>
            <div className="footer-data">
                <div>
                    <h3>WOMEN'S FASHION</h3>
                    <a href="">Al-Karam Studio, Warda, Salitex, Bonanza Satrangi, Edenrobe, Firdous, Junaid Jamshed, Limelight, Sana Safinaz, Mahru, Pushup Bra, Women Undergarments</a>
               
                </div>
                <div><h3>MEN'S FASHION</h3>
                <a href="">Men's Shirts, Men's T-Shirts</a></div>
                <div><h3>ONLINE GROCERY STORE</h3>
                <a href="">Oil & Ghee, Basmati Rice, Dried Fruits, Chocolates, Mattresses</a></div>
                <div><h3>ONLINE BOOK STORE</h3>
                <a href="">English Books, Islamic Books, History Books, English Literature Books, Kids Urdu Stories, Pride & Prejudice, Harry Potter Story Books, Namal Novel, Nimra Ahmed Novels</a>
                </div>
                <div><h3>USED CARS FOR SALE</h3>
                <a href="">Suzuki Wagon R, KIA Sportage, Honda City, Toyota Prado, Suzuki Alto, Suzuki Cultus, Honda Civic, Honda 125, Honda 70, Yamaha Ybr 125, Hi Speed 150, Hi Speed Freedom 200, Metro 70, Super Power 125, Monster JMS 3500 Electric Bike, Super Power 70, Car Accessories</a></div>
                <div><h3>AIR CONDITIONERS</h3>
                <a href="">Kenwood Ac, Haier Ac, Gree Ac, Dawlance Ac, Orient Ac, Ecostar Ac, Inverex Solar Ac, Pel Ac</a>
                </div>
            </div>

        </div>
    </div>
    )
}
export default Footer;;