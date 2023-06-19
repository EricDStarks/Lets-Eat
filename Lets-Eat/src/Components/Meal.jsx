import React, { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    // in this useState, insert link LIST ALL MEALS BY FIRST LETTER to recipe api/database 
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState("");
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState(); // saves what is searched
    // useEffect takes two arguments : the first is a function and the second is a dependency 
    useEffect(() => {
        // use fetch to make API request 
        // effect returns promise which is handled by the `.then` function , reserves the result and converts into json
        // second `.then` returns the data which we can check in the console 
        fetch(url).then(res => res.json()).then(data => {
            // console.log(data);
            console.log(data.meals);
            // store data results in a variable 
            setItem(data.meals);
            // shows whether data is retrieved successfully
            setShow(true);
        })
    }, [url])

    // with this functions , our alphabet in RecipeIndex when clicked will display recipes in the database that started with the selected letter 
    const setIndex = (alpha) => {
        // call setUrl to update Url on letter button click
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    // functions searches whether users presses enter 
    const searchRecipe = (evt) => {
        if(evt.key=="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Find Your New Family Tradition</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>

                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                </div>

                <div className="container">
                    {/* if show is true , data retrieve is successful and mealItem component will display ; if show is false, display 'Not Found' */}
                    {/* pass in data props */}
                    {
                        show ? <MealItem data={item} /> : "Not Found"
                    }

                </div>

                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>
            </div>
        </>
    )
}

export default Meal;