import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Colors = ({colors}) =>{
    return (
        <div className="Colors">
            <h1>Welcome to the color factory!</h1>
            <Link to="/colors/new">Add a Color</Link>
            <ul>
                {colors.map(color => (
                    <li key={color.id}>{color.colorName}</li>
                ))}
            </ul>
        </div>
        
    )
}

export default Colors;