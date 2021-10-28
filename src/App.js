import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header/Header.js";
import CocktailGrid from "./components/cocktails/CocktailGrid";
import Search from "../src/components/ui/Search/Search";
import Pagination from "./components/ui/Pagination/Pagination";
import MobileDropdown from "./components/ui/Pagination/MobileDropdown";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  //items defines piece of state, characters that come from api; setItems is function to manipulate the state, useState is an empty array by default
  //loading is true by default, false after it finishes
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [letter, getLetter] = useState("");

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );

      setItems(result.data.drinks);
      setIsLoading(false);
      console.log(result.data.drinks);
    };
    fetchItems();
  }, [letter]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      setItems(result.data.drinks);
      setIsLoading(false);
      //console.log(result.data.drinks)
    };
    //query is a dependency, fires off useEffect whenever it changes
    fetchItems();
  }, [query]);

  const paginate = (letter) => getLetter(letter);

  return width < breakpoint ? (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <MobileDropdown />
      <CocktailGrid isLoading={isLoading} items={items} />
    </div>
  ) : (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CocktailGrid isLoading={isLoading} items={items} />
      <Pagination paginate={paginate} />

    </div>
  );
};
export default App;
