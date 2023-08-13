import React,{useState} from 'react';
import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from "./models/SingleItem"
import ShoppingListForm from './components/ShoppingListForm';
import {v4 as getId} from "uuid";

function App() {
 const [items,setItems]= useState<Item[]>([]);

 const addItem=(product:string,quantity:number)=>{
setItems([...items,{id:getId(),product,quantity}])
 }
  return (
    <div className="App">
      {/* <Greeter person="Aashish"/>
      <Greeter person="Sumit"/>
      <Greeter person="Aryal"/> */}
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
