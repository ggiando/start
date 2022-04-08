import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/auth/login")
        }
    });

    const goToVehicle = () => {
        // navigate("/vehicle");
        console.log("navigate");
    }
    return(
        <div>
            HomePage
            <div>
                
            </div>
        </div>
    )
}

export default HomePage;