import React from 'react';

const RealEstateCard = ({ property }) => {
    return (
        <div className="card">
            <img src={property.image} alt={property.title} />
            <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">{property.description}</p>
                <p className="card-price">{property.price}</p>
                <p className="card-location">{property.location}</p>
            </div>
        </div>
    );
};

export default RealEstateCard;