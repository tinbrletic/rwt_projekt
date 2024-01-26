import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [image, setImage] = useState(null); // Add state for the image

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Prepare the data to be sent to the backend
            const data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('isChecked', isChecked);
            data.append('selectedOption', selectedOption);
            data.append('image', image); // Append the image to the form data
            
            // Make the API call to send the data to the backend
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                body: data
            });
            
            // Handle the response from the backend
            if (response.ok) {
                // Form submission successful
                console.log('Form submitted successfully');
            } else {
                // Form submission failed
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred while submitting the form', error);
        }
    };

    return (
        <div class="login-form">
            <h1>Navedite informacije za prodaju nekretnine</h1>
            <form onSubmit={handleSubmit} class="inputForm">
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                
                <label>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    Check me
                </label>
                
                <label>
                    Select an option:
                    <select value={selectedOption} onChange={handleDropdownChange}>
                        <option value="">-- Select --</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </label>
                
                <div>
                <label>
                    Upload an image:
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </label>
                </div>
                
                <div>
                    <button type="submit" class="LoginButton">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Home;
