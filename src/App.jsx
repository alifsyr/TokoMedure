import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import MarketplacePage from "./pages/MarketplacePage";
import useAuthValidation from "./auth/authValidation";
import "./App.css";
import { useEffect } from "react";
import CartPage from "./pages/CartPage";

function App() {
  const { isLogin } = useAuthValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/marketplace");
    } else {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
