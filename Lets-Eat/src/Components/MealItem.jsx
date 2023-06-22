import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


const MealItem = ({ data }) => {




const MealItem=({ data }) => {

    console.log(data)
    // data comes back successfully for mealItem Component 
    
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const navigate = useNavigate();
    let videoID = "";

    const openModal = (item) => {
        setSelectedMeal(item);
        setModalOpen(true);
        if (item) {
            const url = item.strYoutube;
            const str = url.split("=");
            videoID = str[str.length - 1];
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {!data ? (
                "Not Found"
            ) : (
                data.map((item) => (
                    <div
                        className="card"
                        key={item.idMeal}
                        onClick={() => openModal(item)}
                    >
                        <img src={item.strMealThumb} alt="" />
                        <h4>{item.strMeal}</h4>
                    </div>
                ))
            )}

            {modalOpen && selectedMeal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <div className="content">
                            <img src={selectedMeal.strMealThumb} alt="Click here to open!" onClick={()=>{navigate(`/${selectedMeal.idMeal}`)}}/>
                            <div className="inner-content">
                                <h1>{selectedMeal.strMeal}</h1>
                                <h2>Cuisine: {selectedMeal.strArea}</h2>
                                <h3>Meal Type: {selectedMeal.strCategory}</h3>
                            </div>
                        </div>
                        <div className="recipe-details">
                            <div className="ingredients">
                                <h2>Ingredients</h2>
                                <h4>
                                    {selectedMeal.strIngredient1}: {selectedMeal.strMeasure1}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient2}: {selectedMeal.strMeasure2}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient3}: {selectedMeal.strMeasure3}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient4}: {selectedMeal.strMeasure4}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient5}: {selectedMeal.strMeasure5}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient6}: {selectedMeal.strMeasure6}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient7}: {selectedMeal.strMeasure7}
                                </h4>
                                <h4>
                                    {selectedMeal.strIngredient8}: {selectedMeal.strMeasure8}
                                </h4>
                            </div>
                            <div className="Instructions">
                                <h2>Instructions</h2>
                                <h3>{selectedMeal.strInstructions}</h3>
                            </div>
                            <div className="video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoID}`}
                                    title="Recipe Video"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MealItem;
