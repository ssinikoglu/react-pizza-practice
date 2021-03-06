import React, { Component, useEffect, useState, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
function App() {
const[pizzas, setPizzas] = useState([]);
const [updatedPizza, setupdatedPizza] = useState({});

useEffect(() => {
  
  async function fetchData(){
    const res = await fetch("http://localhost:3000/pizzas")
    const data = await res.json()
    setPizzas(data)
  }
  fetchData()
  
},[updatedPizza]); // does a lot of fetch, why ?
/*
const handleClick = (e, topping, size, vegetarian, id) => {
  async function updateData(){
    const res = await fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "topping" : topping,
        "size" : size,
        "vegetarian" : vegetarian

      }),
      headers: { 
        "Content-type": "application/json; charset=UTF-8 "
      }
    })
    const data = await res.json()
    console.log(data)
    setupdatedPizza(data)
  } updateData();

}*/

const handleEdit = (e, topping, size, vegetarian, id) =>{  // warning on console!!!
  async function updateData(){
    const res = await fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        "topping" : topping,
        "size" : size,
        "vegetarian" : vegetarian
      }),
      headers: { 
        "Content-type": "application/json; charset=UTF-8 "
      }
    })
    const data = await res.json()
    console.log(data)
    setupdatedPizza(data)
  } updateData();
}

  return (
    <Fragment>
      <Header />
      <PizzaForm handleEdit={handleEdit} setupdatedPizza={setupdatedPizza} updatedPizza = {updatedPizza} />
      <PizzaList handleEdit={handleEdit} pizzas={pizzas} />
    </Fragment>
  );
}

export default App;