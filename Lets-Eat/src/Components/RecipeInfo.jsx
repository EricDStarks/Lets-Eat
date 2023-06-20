// this component contains recipe information : category , country name , youtube link , ingredients
import React, { useState } from "react";
import { useParams } from "react-router-dom";
let videoID="";

const RecipeInfo = () => {
    const [item, setItem] = useState();
    const {MealId}=useParams();
    // if mealId is not empty, make api request
    if(MealId != "")
    {
        // fetch returns the promise 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        // we then handle the promise using this main function and convert into json
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.meals[0]); // data from recipe object is first in the console.log array
            setItem(data.meals[0])
        })
        
    }

    // function that checks if video link is empty ; if not display video 
    if(item){
        const url=item.strYoutube;
        const str=url.split("=");
        videoID=str[str.length-1]; //last element of the array = id
    }

    return (
        <>
        {/* id comes back correctly */} {/* <h3>Find Recipe Information Here  {MealId}</h3> */}
        {/* check if item retrieved from console is empty ; if it is not , display content - recipe information */}
        
        {
            (!item)?"":(
            <>

            <div className="content">
                <img src={item.strMealThumb} alt="" />

                <div className="inner-content">
                    <h1>{item.strMeal}</h1>
                    <h2>Cuisine: {item.strArea}</h2>
                    <h3>Meal Type: {item.strCategory}</h3>
                </div>

            </div>


            <div className="recipe-details">
                
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <h4>{item.strIngredient1} {item.strMeasure1}</h4>
                    <h4>{item.strIngredient2} {item.strMeasure2}</h4>
                    <h4>{item.strIngredient3} {item.strMeasure3}</h4>
                    <h4>{item.strIngredient4} {item.strMeasure4}</h4>
                    <h4>{item.strIngredient5} {item.strMeasure5}</h4>
                    <h4>{item.strIngredient6} {item.strMeasure6}</h4>
                    <h4>{item.strIngredient7} {item.strMeasure7}</h4>
                    <h4>{item.strIngredient8} {item.strMeasure8}</h4>
                    <h4>{item.strIngredient9} {item.strMeasure9}</h4>
                    <h4>{item.strIngredient10} {item.strMeasure10}</h4>
                    <h4>{item.strIngredient11} {item.strMeasure11}</h4>
                    <h4>{item.strIngredient12} {item.strMeasure12}</h4>
                    <h4>{item.strIngredient13} {item.strMeasure13}</h4>
                    <h4>{item.strIngredient14} {item.strMeasure14}</h4>
                    <h4>{item.strIngredient15} {item.strMeasure15}</h4>
                    <h4>{item.strIngredient16} {item.strMeasure16}</h4>
                    <h4>{item.strIngredient17} {item.strMeasure17}</h4>
                    <h4>{item.strIngredient18} {item.strMeasure18}</h4>
                    <h4>{item.strIngredient19} {item.strMeasure19}</h4>
                </div>

                <div className="Instructions">
                    <h2>Instructions</h2>
                    <h3>{item.strInstructions}</h3>
                </div>

                <div className="video">
                    <iframe src={`https://www.youtube.com/embed/${videoID}`}></iframe>
                </div>

            </div>
            </>
            )
        }
        </>
    )
}

export default RecipeInfo;


