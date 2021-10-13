import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header/Header.js'
import CocktailGrid from './components/cocktails/CocktailGrid'

const App = () => {
  //items defines piece of state, characters that come from api; setItems is function to manipulate the state, useState is an empty array by default
  //loading is true by default, false after it finishes
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)

//https://www.breakingbadapi.com/api/

//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

      console.log(result.data)

      setItems(result.data.drinks)
      setIsLoading(false)
      console.log(result.data.drinks)
      console.log(result.data.drinks[0].strDrinks)
    }

    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
      <CocktailGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
