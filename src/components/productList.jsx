// import useFetch from "../hooks/useFetch";
// import AddToCartButton from "./AddToCartButton";

// function ProductList() {
//     const {data: products, loading, error} = useFetch("https://fakestoreapi.com/products");

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//             {products.map(product => (
//                 <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
//                     <h3 style={{ textAlign: 'center' }}>{product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title}</h3>
//                     <p style={{ textAlign: 'center' }}>${product.price}</p>
//                     {/* <button style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#5dadec', color: 'white', cursor: 'pointer' }}>Add to Cart</button> */}
//                     <AddToCartButton product={product} />
//                 </div>
//             ))}
//         </div>
//     );
// }

import { useState } from "react";
import useFetch from "../hooks/useFetch";

function ProductList() {
    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
    const [cart, setCart] = useState({}); 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    
    const handleAddToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1, 
        }));
    };

    const handleIncrease = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: prevCart[id] + 1,
        }));
    };

    
    const handleDecrease = (id) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[id] > 1) {
                updatedCart[id] -= 1;
            } else {
                delete updatedCart[id]; 
            }
            return updatedCart;
        });
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {products.map(product => (
                <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#222', color: 'white' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain', borderRadius: '8px' }} />
                    <h3 style={{ textAlign: 'center' }}>{product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title}</h3>
                    <p style={{ textAlign: 'center' }}>${product.price}</p>

                    {cart[product.id] ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button onClick={() => handleDecrease(product.id)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white', cursor: 'pointer' }}>-</button>
                            <span>{cart[product.id]}</span>
                            <button onClick={() => handleIncrease(product.id)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white', cursor: 'pointer' }}>+</button>
                        </div>
                    ) : (
                        <button onClick={() => handleAddToCart(product.id)} style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Add to Cart</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProductList;
