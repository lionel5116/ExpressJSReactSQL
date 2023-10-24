import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductsData } from "./productsStore";

export const CartProduct = (props) =>{
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductsData(id)
  
  return (
    <>
     <h3>{productData.title}</h3>
     <p>{quantity} total</p>
     <p>${(quantity * productData.price).toFixed(2)}</p>
     <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
     <hr></hr>
    </>
  )

}

export default CartProduct;