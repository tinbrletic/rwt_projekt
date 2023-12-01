// YourReactComponent.js

import React, { useState } from 'react';

const YourReactComponent = () => {
    const [buttonColor, setButtonColor] = useState('red');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = () => {
        // Send data to the backend (replace with your backend URL)
        fetch('http://localhost:8080/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success response from the backend

            // Assuming the backend responds with 'hey'
            if (data === 'hey') {
                setButtonColor('green');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error response from the backend
        });
    };

    return (
        <div>
            <form>
                {/* Input for a username */}
                <label htmlFor="username">Ime:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                
                {/* Input for a password */}
                <label htmlFor="password">Prezime:</label>
                <input
                    
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                {/* Button to submit the form */}
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            
            {/* Button that changes color based on the response 
            <button style={{ backgroundColor: buttonColor }} onClick={handleButtonClick}>
                Click me
            </button>*/}
            
        </div>
    );
};

export default YourReactComponent;
