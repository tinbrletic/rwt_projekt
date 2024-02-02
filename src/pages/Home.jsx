import React, { useState, useEffect } from "react";
import RealEstateCard from "../components/RealEstateCard.jsx";

const API_URL = "http://localhost:8080/listings";

const Home = () => {
    const [listing, setListing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setListing(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {listing?.length > 0 
            ? (
                <div className="container">
                    {
                        listing.map((estate) => (
                            <RealEstateCard key={estate.id} Estate={estate} />
                        ))
                    }
                </div>
            ) : (
                <div className="empty">
                    <h2>No Real Estate found</h2>
                </div>
            )}
        </div>
    );
};

export default Home;