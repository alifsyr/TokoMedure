import React from "react";
import useCartStore from "../store/cartStore";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  console.log("Current cart:", cart);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.product.product.title}</strong> - $
              {item.product.product.price}
              <button onClick={() => removeFromCart(item.product.product.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
