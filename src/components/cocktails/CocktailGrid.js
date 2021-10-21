import React from "react";
import "./CocktailGrid.css";
import CocktailItem from "./CocktailItem";

const CocktailGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items && items.map((item) => (
        <CocktailItem key={item.idDrink} item={item}></CocktailItem>
      ))}
    </section>
  );
};

export default CocktailGrid;
