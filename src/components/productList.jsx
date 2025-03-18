import useFetch from "../hooks/useFetch";
import AddToCartButton from "./AddToCartButton";

function ProductList() {
    const {data: products, loading, error} = useFetch("https://fakestoreapi.com/products");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {products.map(product => (
                <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    <h3 style={{ textAlign: 'center' }}>{product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title}</h3>
                    <p style={{ textAlign: 'center' }}>${product.price}</p>
                    {/* <button style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#5dadec', color: 'white', cursor: 'pointer' }}>Add to Cart</button> */}
                    <AddToCartButton product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;