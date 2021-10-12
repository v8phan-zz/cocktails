import React from "react";
import "./CocktailGrid.css";

const CocktailGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h1>{item.strDrink}</h1>
      ))}
    </section>
  );
};

export default CocktailGrid;
