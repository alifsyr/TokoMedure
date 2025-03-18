import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthValidation from '../auth/authValidation';

function Form() {
    const navigate = useNavigate();
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isLogin, setIsLogin } = useAuthValidation();

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const hasUpperCase = /[A-Z]/.test(password);
    const isMinLength = password.length >= 8;
    const specialChar = /[!@#$%^&*(),.?"":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    const handleLogin = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert('You are already logged in.');
            return;
        }
        if (isMinLength && hasUpperCase && specialChar && hasNumber) {
            if (email === 'admin@gmail.com' && password === '*Admin123') {
                alert('Login successful');
                setIsLogin();
                navigate(`/marketplace`);
            } else {
                alert('Login Failed');
            }
        } else {
            alert('Password does not match criteria');
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px #ccc' }}>
                <label htmlFor="email" style={{ marginBottom: '10px' }}>Email:</label>
                <input type="email" id="email" name="email" required style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} onChange={handleUsername} />
                <label htmlFor="password" style={{ marginBottom: '10px' }}>Password:</label>
                <input type="password" id="password" name="password" required style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} onChange={handlePassword} />
                <input type="submit" value="Login" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }} />
            </form>
        </div>
    )
}

export default Form;