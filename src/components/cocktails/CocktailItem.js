import React from "react";
import "./CocktailItem.css";

const CocktailItem = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.strDrinkThumb} alt=""></img>
          <h1>{item.strDrink}</h1>
        </div>
        <div className="card-back">
          <h1>{item.strDrink}</h1>
          <ul>
            <li>
              <strong>Ingredients: </strong>{item.strMeasure1}
              {item.strIngredient1}, {item.strMeasure2}
              {item.strIngredient2}, {item.strMeasure3}
              {item.strIngredient3}
            </li>
            <li>
                <strong>Instructions: </strong>
                {item.strInstructions}
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default CocktailItem;
