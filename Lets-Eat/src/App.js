import React from 'react';
import './Components/style.css';
import Meal from './Components/Meal';
import RecipeInfo from './Components/RecipeInfo';
import {Route,Routes} from 'react-router-dom';
import "./Components/style.css";

function App() {
  return (
    <>

   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:MealId" element={<RecipeInfo/>}/>
      </Routes>
    </>
  )
}

export default App;