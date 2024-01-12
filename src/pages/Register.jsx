import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                // Handle success response from the backend
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                // Handle error response from the backend
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div class='login-form'>
            <h2>Najmoderniji oglasnik za nekretnine u PGŽ</h2>
            <form className="inputForm" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
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
                <div>
                    <button type="submit" class="LoginButton">Register</button>
                </div>
                <div>
                    Imaš račun,{' '}
                    <span
                        style={{ color: 'blue', cursor: 'pointer' }}
                        onClick={() => {
                            // Redirect to the registration page (replace with your logic)
                            window.location.href = '/';
                        }}
                    >
                        ulogiraj se!
                    </span>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
