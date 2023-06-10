import React from "react";
import { Link } from "react-router-dom";

const Colors = ({colors}) =>{
    return (
        <>
            <h1>Welocme To the Color Factory!!</h1>
            <Link to="/color/new">Click here to add a new color!</Link>
            <ul style={{listStyle: "none"}}>
                {colors.map(color => (
                    <li key={color.id}> <Link to={`/color/${color.colorName}`} state={color}>{color.colorName}</Link> </li>
                ))}
            </ul>
        </>
        
    )
}

export default Colors;