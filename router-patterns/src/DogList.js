import React from "react";
import {Link} from "react-router-dom";
import "./DogList.css";

const DogList = ({dogs}) => {
    return(
        <div className="DogList">
            <h1>Look At my dogs!!!</h1>
            <p>click to view more information</p>
            {dogs.map(dog=> (
                <Link to={`/dogs/${dog.name}`} key={dog.name}><img src={dog.src} alt={dog.name}></img></Link>
            ))}
        </div>
    )
}

export default DogList;