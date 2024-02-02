import React, { useState, useEffect } from "react";

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
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;