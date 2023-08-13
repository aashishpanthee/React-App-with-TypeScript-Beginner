import React from 'react';
import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';

function App() {
  const list=[
    {id:1,product:"Milk",quantity:2},
    {id:2,product:"Bread",quantity:3},
    {id:3,product:"Eggs",quantity:4},
  ]
  return (
    <div className="App">
      {/* <Greeter person="Aashish"/>
      <Greeter person="Sumit"/>
      <Greeter person="Aryal"/> */}
      <ShoppingList items={list}/>
    </div>
  );
}

export default App;
