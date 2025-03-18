// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Form from "../components/Form";
// import useAuthValidation from '../auth/authValidation';

// function LoginPage() {
//     const navigate = useNavigate();
//     const { isLogin } = useAuthValidation();

//     useEffect(() => {
//         if (isLogin) {
//             navigate('/marketplace');
//         }
//     }, [isLogin, navigate]);

//     return (
//         <div>
//             <div className="logo-container">
//                 <img 
//                     src="https://object-dataku.ap-south-1.linodeobjects.com/uploads/all/linodex1669942542_logo.jpg" 
//                     alt="Toko Madure Logo" 
//                     className="logo" 
//                 />
//             </div>
//             <h1>Toko Madure</h1>
//             <h2>Login</h2>
//             <Form />
//         </div>
//     )
// }
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import useAuthValidation from '../auth/authValidation';
// eslint-disable-next-line no-unused-vars
import { motion} from "framer-motion"; 
import '../assets/css/LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const { isLogin } = useAuthValidation();

    useEffect(() => {
        if (isLogin) {
            navigate('/marketplace');
        }
    }, [isLogin, navigate]);

    return (
        <div className="login-page">
            <h1 className="title">Toko Madure</h1>
            <motion.div
                className="logo-container"
                initial={{ scale: 0, opacity: 0 }}  
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
            >
                <img 
                    src="https://object-dataku.ap-south-1.linodeobjects.com/uploads/all/linodex1669942542_logo.jpg" 
                    alt="Toko Madure Logo" 
                    className="logo" 
                />
            </motion.div>
            <h2 className="subtitle">Silakan Masuk</h2>
            <Form />
            <footer className="footer">
                © March 2025, Kelompok 4
            </footer>
        </div>
    )
}

export default LoginPage;
