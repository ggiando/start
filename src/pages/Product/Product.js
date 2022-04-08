import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Product() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/auth/login");
        }

        loadProducts();
    });

    function loadProducts() {
        fetch(`${process.env.REACT_APP_API_URL}/product`, {
            method: "GET",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json()).then(res => {
            console.log(res.token);
            localStorage.setItem("token", res.token);
            navigate("/home");
        });
    }


    return (
        <div>
            Product list:
            <div>

            </div>
        </div>
    )
}

export default Product;