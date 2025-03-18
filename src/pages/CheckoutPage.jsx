import useCartStore from "../store/cartStore";

function Checkout() {
    const {cart} = useCartStore();
    console.log("Current cart:", cart);

    const totalPrice = cart.reduce((total, item) => total + item.product.product.price, 0);

    return(
        <div>
            <h2>Checkout</h2>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <strong>{item.product.product.title}</strong> - ${item.product.product.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                </div>
            ) : (
                <p>Cart is empty</p>
            )}
        </div>
    );
}

export default Checkout;