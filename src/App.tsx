import React,{useState} from 'react';
import './App.css';
// import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from "./models/SingleItem"
import ShoppingListForm from './components/ShoppingListForm';

function App() {
 const [items,setItems]= useState<Item[]>([]);

 const addItem=(product:string)=>{
  console.log("Made it to the app component");
  console.log(product)
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
