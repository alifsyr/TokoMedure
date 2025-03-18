import { Link, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import MarketplacePage from "./pages/MarketplacePage";
// import useAuthValidation from './auth/authValidation';
import "./App.css";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
// import { useEffect } from 'react';

function App() {
  // const { isLogin } = useAuthValidation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate('/marketplace');
  //   } else {
  //     navigate('/');
  //   }
  // }, [isLogin, navigate]);

  return (
    <div>
      <nav>
        <Link to="/marketplace">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
