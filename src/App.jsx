// YourReactComponent.js

import React, { useState } from 'react';

const YourReactComponent = () => {
    const [buttonColor, setButtonColor] = useState('red');

    const handleButtonClick = () => {
        fetch('http://localhost:8080/api/hey') // Change the URL to match your Spring Boot server
            .then(response => response.text())
            .then(data => {
                if (data === 'hey') {
                    setButtonColor('green');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <button style={{ backgroundColor: buttonColor }} onClick={handleButtonClick}>
                Click me
            </button>
        </div>
    );
};

export default YourReactComponent;
