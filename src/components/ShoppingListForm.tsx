import React from "react";

const ShoppingListForm = ():JSX.Element => {
    function handleSubmit(e:React.FormEvent){
e.preventDefault();
console.log("Submitted");
    }
  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Add Product" />
    <button type="submit">Add</button>
  </form>
};

export default ShoppingListForm;
