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

    const handleFormSubmit =async  (e) => {
        e.preventDefault();
        console.log(e)
        console.log(formData)
        // Send data to the backend (replace with your backend URL)

        const result = await fetch("");
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
            <h2>Najmoderniji oglasnik za nekretnine u PGŽ</h2>
            <form id='contanier' className='inputForm' onSubmit={handleFormSubmit}>
                {/* Input for a username */}
                <div>
                <label htmlFor="username">Ime: </label>
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
                <label htmlFor="password">Prezime: </label>
                <input
                    
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                </div>
                {/* Button to submit the form */}
                <div>
                <button type="submit">
                    Submit
                </button>
                </div>
            </form>
            
            {/* Button that changes color based on the response 
            <button style={{ backgroundColor: buttonColor }} onClick={handleButtonClick}>
                Click me
            </button>*/}
            
        </div>
    );
};

export default YourReactComponent;
