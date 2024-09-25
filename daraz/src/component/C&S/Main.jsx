import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import './Main.css'

const Main = () =>{


    return(
        <div className="main">
            <Categories/>
            <Slider/>
        </div>
    )
}
export default Main;