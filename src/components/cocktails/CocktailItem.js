import React from "react";
import "./CocktailItem.css";

const CocktailItem = ({ item }) => {
  var ingredients = [];
  var measurements = [];

  Object.keys(item).map((drinkProps) => {
    if (item[drinkProps] !== null && drinkProps.includes("strIngredient")) {
      ingredients.push(item[drinkProps]);
    }
  });

  Object.keys(item).map((drinkProps) => {
    if (item[drinkProps] !== null && drinkProps.includes("strMeasure")) {
      measurements.push(item[drinkProps]);
    }
  });

  return (
    <div className="cardo">
      <div className="cardo-inner">
        <div className="cardo-front">
          <img src={item.strDrinkThumb} alt=""></img>
          <h1>{item.strDrink}</h1>
        </div>
        <div className="cardo-back">
          <h1>{item.strDrink}</h1>
          <ul>
            <li>
              <strong>Ingredients: </strong>
              {ingredients.map((num1, index) => {
                const num2 = measurements[index];
                return (
                  <div>
                    {num2} {num1}
                  </div>
                );
              })}
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
