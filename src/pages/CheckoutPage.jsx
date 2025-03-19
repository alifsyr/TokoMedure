import { Navigate, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import NavBar from "../components/NavBar";

function Checkout() {
    const {cart, clearCart} = useCartStore();
    console.log("Current cart:", cart);

    const navigate=useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.product.product.price, 0);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <NavBar/>
            <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Checkout</h2>
            {cart.length > 0 ? (
                <div>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                                    <img
                                        src={item.product.product.image}
                                        alt={item.product.product.title}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "cover",
                                            borderRadius: "4px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <strong style={{ textAlign: "left", display: "block" }}>
                                            {item.product.product.title}
                                        </strong>
                                        <p style={{ margin: "5px 0", textAlign: "left" }}>
                                            ${item.product.product.price.toFixed(2)} x {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <p style={{ fontWeight: "bold" }}>
                                        ${(item.product.product.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div
                        style={{
                            textAlign: "left",
                            marginTop: "20px",
                            padding: "10px",
                            borderTop: "1px solid #ccc",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h3 style={{ margin: 0 }}>
                            Total: $
                            {cart
                                .reduce(
                                    (total, item) =>
                                        total + item.product.product.price * item.quantity,
                                    0
                                )
                                .toFixed(2)}
                        </h3>
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#007BFF",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontSize: "16px",
                            }}
                            onClick={() => {
                                alert("Proceeding to checkout...");
                                navigate("/marketplace");
                                clearCart();
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p style={{ textAlign: "left", color: "#888" }}>Cart is empty</p>
            )}
        </div>
    );
}

export default Checkout;