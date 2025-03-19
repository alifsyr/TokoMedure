import useFetch from "../hooks/useFetch";
import useFilteredCategoriesStore from "../store/filteredCategoriesStore";
import AddToCartButton from "./AddToCartButton";

function ProductList() {
    const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
    const { filteredCategory } = useFilteredCategoriesStore();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const filteredProducts =
        filteredCategory === "All"
            ? products
            : products.filter((p) => p.category === filteredCategory);

    const getStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {"★".repeat(fullStars)}
                {halfStar ? "☆" : ""}
                {"☆".repeat(emptyStars)}
            </>
        );
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        width: "200px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(93, 173, 236, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    {/* Category Label */}
                    <span
                        style={{
                            backgroundColor: "#f0f0f0",
                            color: "#333",
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            marginBottom: "8px",
                            textTransform: "uppercase",
                        }}
                    >
                        {product.category}
                    </span>

                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                    />

                    <h3 style={{ textAlign: "center", margin: "8px 0 4px" }}>
                        {product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
                    </h3>

                    <p style={{ textAlign: "center", margin: "4px 0" }}>${product.price}</p>

                    {/* Star Rating and Review Count */}
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "4px 0 12px" }}>
                        <span style={{ color: "#FFD700", fontSize: "14px" }}>{product.rating.rate}</span>
                        <span style={{ color: "#FFD700", fontSize: "14px" }}>{getStars(product.rating.rate)}</span>
                        <span style={{ fontSize: "12px", color: "#666" }}>({product.rating.count} reviews)</span>
                    </div>

                    <AddToCartButton product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
