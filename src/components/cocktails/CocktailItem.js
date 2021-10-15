import React from "react";
import "./CocktailItem.css";

const CocktailItem = ({ item }) => {
  //console.log(item);
  var ingredients = [];
  var measurements = [];

  Object.keys(item).map((drinkProps) => {
    if (item[drinkProps] !== null && drinkProps.includes("strIngredient")) {
      ingredients.push(item[drinkProps]);
      console.log(ingredients);
      //return <div>{item[drinkProps]}</div>
    }
  });

  Object.keys(item).map((drinkProps) => {
    if (item[drinkProps] !== null && drinkProps.includes("strMeasure")) {
      measurements.push(item[drinkProps]);
      console.log(measurements);
    }
  });

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
              <strong>Ingredients: </strong>
              {ingredients.forEach((num1, index) => {
                const num2 = measurements[index];
                console.log(num2, num1);
                  return <div>{num2} {num1}</div>
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
