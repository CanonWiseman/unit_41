import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () =>{
    return(
        <div>
            <h1>WELCOME TO THE VENDOR</h1>
            <Link to="/coke">Grab a coke!</Link>
            <Link to="/sunchips">Grab a bag of sunchips!</Link>
            <Link to="/nature-valley">Grab a nature valley bar!</Link>
        </div>
    )
}

export default VendingMachine;