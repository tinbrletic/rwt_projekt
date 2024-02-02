import React, { useState } from 'react';


const List = () => {
        const [street, setStreet] = useState('');
        const [price, setPrice] = useState(0);
        const [sqMeters, setSqMeters] = useState(0);
        const [floors, setFloors] = useState(0);
        const [numOfRooms, setNumOfRooms] = useState(0);
        const [numOfBathrooms, setNumOfBathrooms] = useState(0);
        const [yearOfConstruction, setYearOfConstruction] = useState(0);
        const [numOfResidents, setNumOfResidents] = useState(0);
        const [hasParking, setHasParking] = useState(false);
        const [pictureUrl, setPictureUrl] = useState('');

        const handleStreetChange = (e) => {
            setStreet(e.target.value);
        };

        const handleSqMetersChange = (e) => {
            setSqMeters(parseInt(e.target.value));
        };

        const handleFloorsChange = (e) => {
            setFloors(parseInt(e.target.value));
        };

        const handleNumOfRoomsChange = (e) => {
            setNumOfRooms(parseInt(e.target.value));
        };

        const handleNumOfBathroomsChange = (e) => {
            setNumOfBathrooms(parseInt(e.target.value));
        };

        const handleYearOfConstructionChange = (e) => {
            setYearOfConstruction(parseInt(e.target.value));
        };

        const handleNumOfResidentsChange = (e) => {
            setNumOfResidents(parseInt(e.target.value));
        };

        const handleHasParkingChange = (e) => {
            setHasParking(e.target.checked);
        };

        const handlePictureUrlChange = (e) => {
            setPictureUrl(e.target.value);
        };

        const handlepriceOfEstateChange = (e) => {
            setPrice(parseInt(e.target.value));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                // Prepare the data to be sent to the backend
                const data = {
                    street,
                    price,
                    sqMeters,
                    floors,
                    numOfRooms,
                    numOfBathrooms,
                    yearOfConstruction,
                    numOfResidents,
                    hasParking,
                    pictureUrl 
                };

                // Make the API call to send the data to the backend
                const response = await fetch('http://localhost:8080/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    
                });

                // Handle the response from the backend
                if (response.ok) {
                    // Form submission successful
                    console.log(data);
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
            <div className="login-form">
                <h1>Navedite informacije za prodaju nekretnine</h1>
                <form onSubmit={handleSubmit} className="inputForm">
                    <label>
                        <span>Street:</span>
                        
                        <input type="text" value={street} onChange={handleStreetChange}  style={{ marginLeft: '10px' }} />
                    </label>

                    <label>
                        Square Meters:
                        
                        <input type="number" value={sqMeters} onChange={handleSqMetersChange}  style={{ marginLeft: '10px' }} />
                    </label>

                    <label>
                        Floors:
                        
                        <input type="number" value={floors} onChange={handleFloorsChange}  style={{ marginLeft: '10px' }} />
                    </label>

                    <label>
                        Number of Rooms:
                        
                        <input type="number" value={numOfRooms} onChange={handleNumOfRoomsChange}  style={{ marginLeft: '10px' }} />
                    </label>

                    <label>
                        Number of Bathrooms:
                        
                        <input type="number" value={numOfBathrooms} onChange={handleNumOfBathroomsChange}  style={{ marginLeft: '10px' }}/>
                    </label>

                    <label>
                        Year of Construction:
                        
                        <input type="number" value={yearOfConstruction} onChange={handleYearOfConstructionChange}  style={{ marginLeft: '10px' }}/>
                    </label>

                    <label>
                        Number of Residents:
                        
                        <input type="number" value={numOfResidents} onChange={handleNumOfResidentsChange}  style={{ marginLeft: '10px' }}/>
                    </label>

                    <label>
                        Has Parking:
                        <input type="checkbox" checked={hasParking} onChange={handleHasParkingChange} style={{ marginLeft: '10px' }}/>
                    </label>

                    <label>
                        Picture URL:
                        <input type="text" value={pictureUrl} onChange={handlePictureUrlChange}  style={{ marginLeft: '10px' }}/>
                    </label>
                    

                    <label>
                        <span>Price:</span>
                        
                        <input type="number" value={price} onChange={handlepriceOfEstateChange}  style={{ marginLeft: '10px' }}/>
                    </label>

                    
                    <div>
                        <button type="submit" className="LoginButton">Submit</button>
                    </div>
                </form>
            </div>
        );
};

export default List;