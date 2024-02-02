import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const NavigateTo = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        console.log(formData)
        // Send data to the backend (replace with your backend URL)

        const result = await fetch("");
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.text())
        
        .then(data => {
            console.log('Success:', data);
            // Handle success response from the backend
            // Redirect to the home page
            NavigateTo('/');
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error response from the backend
        });
    };

    return (
        <div class="login-form">
            <h2>Najmoderniji oglasnik za nekretnine u PGŽ</h2>
            <form id='contanier' className='inputForm' onSubmit={handleFormSubmit}>
                {/* Input for a username */}
                <div>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                /></div>
                {/* Input for a password */}
                <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                </div>
                {/* Button to submit the form */}
                <div>
                <button type="submit" class="LoginButton">
                    Login
                </button>
                </div>
                <div>
                    Ako nemaš račun, {' '}
                    <span
                        style={{ color: 'blue', cursor: 'pointer' }}
                        onClick={() => {
                            window.location.href = '/Register';
                        }}
                    >
                        registriraj se!
                    </span>
                </div>
            </form>
            
        </div>
    );
};

export default Login;
