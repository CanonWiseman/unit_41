import React from "react";
import { Link } from "react-router-dom";

const Sunchips = () =>{
    return(
        <div>
            <Link to="/">Back to the vending machine</Link>
            <img src="https://target.scene7.com/is/image/Target/GUEST_e7b1db16-0db1-4ff0-a316-ce18ce85fa22?wid=1000&hei=1000&qlt=80&fmt=webp" alt="Bag of sunchips"/>
        </div>
    )
}

export default Sunchips;