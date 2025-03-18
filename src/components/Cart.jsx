import React from "react";
import useCartStore from "../store/cartStore";

function Cart() {
  const { cart, removeFromCart, clearCart, updateAmount } = useCartStore();
  console.log("Current cart:", cart);

  const containerStyle = {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "40px",
  };

  const detailStyle = {
    flex: 1,
    marginRight: "40px",
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const buttonStyle = {
    padding: "5px 10px",
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ff4500",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul style={listStyle}>
          {cart.map((item, index) => (
            <li key={index} style={listItemStyle}>
              <img
                src={item.product.product.image}
                alt={item.product.product.title}
                style={imageStyle}
              />
              <div style={detailStyle}>
                <strong>{item.product.product.title.length > 20 ? item.product.product.title.substring(0, 20) + '...' : item.product.product.title}</strong>
                <p>${item.product.product.price}</p>
              </div>
              <div style={buttonContainerStyle}>
                <button
                  onClick={() =>
                    updateAmount(item.product.product.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  // style={{ height: "100%" }}
                  value={item.quantity}
                  onChange={(e) =>
                    updateAmount(
                      item.product.product.id,
                      Number(e.target.value)
                    )
                  }
                  style={{ width: "40px", textAlign: "center" }}
                />
                <button style={{ marginRight: "15px" }}
                  onClick={() =>
                    updateAmount(item.product.product.id, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  style={buttonStyle}
                  onClick={() => removeFromCart(item.product.product.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
      {cart.length > 0 && (
        <button style={clearButtonStyle} onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;
