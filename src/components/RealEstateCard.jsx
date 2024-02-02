import React from 'react';
import './RealEstateCard.css';  


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
                        <span>{Estate.floors} floors</span>
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
 