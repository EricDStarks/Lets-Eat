import React from "react";


const RecipeIndex = ({alphaIndex}) => {
    const alpha = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let num=0;

    return (
        <>
            {
                alpha.map(item => {
                    return (
                        // item represents letter clicked then setIndex method that finds mail.jsx and updates url
                        <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecipeIndex;