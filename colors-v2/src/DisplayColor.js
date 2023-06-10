import React, {useEffect} from "react";
import {useLocation, Link, useNavigate} from "react-router-dom";


const DisplayColor = () =>{ 
    
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    useEffect(function checkForColor(){
        if(!location.state){
            navigate('/colors')
        }
    });
    
    return(
        <>
            {location.state ? (
                <>
                <h1>This is {location.state.colorName}</h1>
                <Link to="/colors">Go back to home</Link>
                <div style={{width: "500px", backgroundColor: location.state.colorValue, height: "500px", margin: "25px auto"}}></div>
                </>)
                : null} 
        </>

    )
}

export default DisplayColor;