import { Link, useNavigate } from 'react-router-dom';
import useAuthValidation from '../auth/authValidation';
import '../assets/css/NavBar.css';

function NavBar() {
    const navigate = useNavigate();
    const { reset } = useAuthValidation();

    const handleLogout = () => {
        reset();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="https://object-dataku.ap-south-1.linodeobjects.com/uploads/all/linodex1669942542_logo.jpg" alt="Toko Madure Logo" className="logo" />
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/marketplace" className="navbar-link">Marketplace</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/cart" className="navbar-link">Cart</Link>
                </li>
            </ul>
            <Link to="/" onClick={handleLogout} className="navbar-link logout-link">Logout</Link>
        </nav>
    );
}

export default NavBar;