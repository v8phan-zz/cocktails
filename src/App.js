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
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [letter, getLetter] = useState("");

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

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
    };
    fetchItems();
  }, [query]);

  const paginate = (letter) => getLetter(letter);
  const dropper = (letter) => getLetter(letter);

  return width < breakpoint ? (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <MobileDropdown dropper={dropper} />
      {items ? (
        <CocktailGrid isLoading={isLoading} items={items} />
      ) : (
        <h2>No drinks found</h2>
      )}
    </div>
  ) : (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Pagination paginate={paginate} />
      {items ? (
        <div>
          <CocktailGrid isLoading={isLoading} items={items} />
          <Pagination paginate={paginate} />{" "} 
        </div>
      ) : (
        <h2>No drinks found</h2>
      )}
    </div>
  );
};
export default App;
