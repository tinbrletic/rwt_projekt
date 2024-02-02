
import React from 'react';
import './RealEstateCard.css';  

const obje = [
    {
        "street": "Vukovarska Ulica",
        "price": 200000,
        "sqMeters": 80,
        "floors": 1,
        "numOfRooms": 4,
        "numOfBathrooms": 1,
        "yearOfConstruction": 2004,
        "numOfResidents": 4,
        "hasParking": true,
        "pictureUrl": "https://roel.com.hr/wp-content/uploads/2022/09/Peterosoban-stan-s-loggiom-i-vrtom-61RIF1A2-2-1170x785.jpg"
    }
]

const RealEstateCard = ({ Estate }) =>{
        return (
                <div className="estate">
                    <div>
                        <h3>{Estate.title}</h3>
                        <span>{Estate.price} €</span>
                    </div>
        
                    <div>
                        <img src={Estate.pictureUrl} alt="NaN" />
                    </div>
        
                    <div>
                        <span>{Estate.street}</span>
                        <br />
                        <span>{Estate.sqMeters} m^2</span>
                        <br />
                        <span>{Estate.numOfRooms} rooms</span>
                        <br />
                        <span>{Estate.numOfBathrooms} bathrooms</span>
                        <br />
                        <span>Year of construction: {Estate.yearOfConstruction}</span>
                        <br />
                        <span>{Estate.numOfResidents} residents</span>
                        <br />  
                        <span>{Estate.hasParking ? "Parking available" : "No parking"}</span>
                    </div>
                </div>
        );
}

export default RealEstateCard;
 