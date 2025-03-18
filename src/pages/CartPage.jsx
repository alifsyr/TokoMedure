import useCartStore from "../store/cartStore";

function CartPage() {
        return (
            <div>
                <h1>Cart</h1>
                <ul>
                    {useCartStore.getState().cart.map((product) => (
                        <li key={product.id}>
                            {product.name} - {product.price}
                            <button onClick={() => useCartStore.getState().removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => useCartStore.getState().clearCart()}>Clear Cart</button>
            </div>
        );
}
export default CartPage;