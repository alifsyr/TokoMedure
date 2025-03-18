import useCartStore from "../store/cartStore";

function AddToCartButton(product) {
    const addToCart=useCartStore((state)=>state.addToCart);
    return (
        <button onClick={() => addToCart(product)}>
            Add to Cart
        </button>
    );  
}
export default AddToCartButton; 