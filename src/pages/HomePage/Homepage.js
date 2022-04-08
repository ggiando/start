import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function HomePage() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/auth/login")
        }
    }, []);

    return(
        <div>
            HomePage
        </div>
    )
}

export default HomePage;