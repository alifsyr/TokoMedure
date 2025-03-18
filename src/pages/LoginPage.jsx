import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import useAuthValidation from '../auth/authValidation';

function LoginPage() {
    const navigate = useNavigate();
    const { isLogin } = useAuthValidation();

    useEffect(() => {
        if (isLogin) {
            navigate('/marketplace');
        }
    }, [isLogin, navigate]);

    return (
        <div>
            <div className="logo-container">
                <img 
                    src="https://object-dataku.ap-south-1.linodeobjects.com/uploads/all/linodex1669942542_logo.jpg" 
                    alt="Toko Madure Logo" 
                    className="logo" 
                />
            </div>
            <h1>Toko Madure</h1>
            <h2>Login</h2>
            <Form />
        </div>
    )
}

export default LoginPage;