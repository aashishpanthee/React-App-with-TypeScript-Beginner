import React,{useRef} from "react";
interface ShoppingListFormProps{
    onAddItem:(item:string,quantity:number)=>void;
}
const ShoppingListForm = ({onAddItem}:ShoppingListFormProps):JSX.Element => {
    const productInputRef=useRef<HTMLInputElement>(null);
    const quantityInputRef=useRef<HTMLInputElement>(null);
    function handleSubmit(e:React.FormEvent){
      e.preventDefault();
      const newProduct=productInputRef.current!.value;
      const newQuantity=parseInt(quantityInputRef.current!.value);
      onAddItem(newProduct,newQuantity);
      productInputRef.current!.value="";
      quantityInputRef.current!.value="";
    }
  return <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Add Product" ref={productInputRef}/>
           <input type="number" placeholder="Add Quantity" ref={quantityInputRef}/>
           <button type="submit">Add</button>
         </form>
};

export default ShoppingListForm;
