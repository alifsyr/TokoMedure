import ProductList from "../components/productList";
import NavBar from "../components/NavBar";

function MarketplacePage() {
    return (
        <div>
            <NavBar />
            <div style={{ width: '100%', paddingTop: '150px' }}>
                <h1>Marketplace</h1>
                <ProductList />
            </div>
        </div>
    )
}
export default MarketplacePage;