import React from "react";
import Main from "../component/C&S/Main";
import CardData from './../component/Card/CardData';
import Shopnow from "../component/Shopnow/Shopnow";
import CategoriesLink from "../component/Categoriess/CategoriesLink";
import FlashSale from "../component/FlashSale/FlashSale";
import Foru from "../component/ForU/Foru";

const Home = () =>{

    return(
    <div>
        <Main/>
        <CardData/>
        <Shopnow/>
        <CategoriesLink/>
        <FlashSale/>
        <Foru/>
    </div>
    )
}
export default Home;;