import React from "react";
import { useNavigate } from "react-router-dom";




const MealItem=({data})=>{
    console.log(data)
    // data comes back successfully for mealItem Component 
    let navigate = useNavigate();
    return(
        <>
        {/* check is data retrieved is empty */}
        {/* if data is empty, display not found else display card */}
        {(!data) ? "Not Found" : data.map(item=>{
            return (
                // input path from console that contains meal id path i.e. {item.idMeal}
                // key displays id in url after clicked 
                     <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
            {/* insert link from API for SEARCH MEAL BY NAME thumbnail */}
            {/* https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg */}
            {/* find recipe image in console i.e. {item.strMealThumb} */} {/* <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80" alt="" /> */}
            <img src={item.strMealThumb} alt="" />
            {/* find recipe name in console i.e. {item.strMeal} */} {/* <h4>Syrup Being Poured onto Fancy Pancakes with Bananas and Apples</h4> */}
            <h4>{item.strMeal}</h4>

        </div>  
            )
        })}
 
        </>
    )
}

export default MealItem;