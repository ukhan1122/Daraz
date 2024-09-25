import React, { useState } from "react";
import CategoriesData from "../../Dummydata/CategoriesData";
import './Categories.css'

const Categories = () =>{
 
    return(
        <div className="Category">
                <ul>   {CategoriesData.map(Categories =>(
                <Categoyitem key={Categories.id} category={Categories}
                />))}
                </ul>
               
      
        </div>
    )
}

const Categoyitem = ({category}) =>{
    

    return(
        <li className="categoryitem" >
            <span>{category.name}</span>
            {category.subcategories && category.subcategories.length > 0 && (
            <ul className="subcategories">
              {category.subcategories.map(subcategory =>(
                <Subcategory key={subcategory.id} subcategory={subcategory}/>
              ))}      
            </ul>
            )}
        </li>
    )

}

const Subcategory = ({subcategory}) =>{

    return(
        <li className="subcategory">
            <span>{subcategory.name}</span>
            {subcategory.subcategories && subcategory.subcategories.length > 0 && (
                <ul className="sub-categories">
                    {subcategory.subcategories.map(subSubcategory=>(
                        <Subcategory key={subSubcategory.id} subcategory={subSubcategory}/>
                    ))}
                </ul>
            )}
        </li>


    )
}


export default Categories