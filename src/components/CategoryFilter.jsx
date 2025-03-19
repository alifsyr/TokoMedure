import { useEffect, useState } from "react";
import useFilteredCategoriesStore from "../store/filteredCategoriesStore";
import useFetch from "../hooks/useFetch";

function CategoryFilter() {
    const { filteredCategory, setFilteredCategory } = useFilteredCategoriesStore();
    const { data: products } = useFetch("https://fakestoreapi.com/products");
    const [categories, setCategories] = useState(["All"]);

    useEffect(() => {
        if (products?.length) {
            const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];
            setCategories(uniqueCategories);
        }
    }, [products]);

    return (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "10px" }}>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilteredCategory(category)}
                        style={{
                            padding: "10px 16px",
                            borderRadius: "20px",
                            border: "2px solid #5dadec",
                            backgroundColor: filteredCategory === category ? "#5dadec" : "white",
                            color: filteredCategory === category ? "white" : "#5dadec",
                            fontSize: "14px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            outline: "none",
                        }}
                        onMouseEnter={(e) => {
                            if (filteredCategory !== category) e.target.style.backgroundColor = "#e3f2fd";
                        }}
                        onMouseLeave={(e) => {
                            if (filteredCategory !== category) e.target.style.backgroundColor = "white";
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
