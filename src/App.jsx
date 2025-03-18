import { Link, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import MarketplacePage from "./pages/MarketplacePage";
// import useAuthValidation from './auth/authValidation';
import "./App.css";
import CartPage from "./pages/CartPage";
// import { useEffect } from 'react';

function App() {
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
