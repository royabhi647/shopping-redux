import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleDelete = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div className="cartWrapper">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} />
          <h5>{product.title}</h5>
          <h4>{product.price}</h4>
          <button onClick={()=>handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
