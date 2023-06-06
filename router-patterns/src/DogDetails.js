import React from "react";
import { useParams, Link } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const params = useParams();
    const currDog = dogs.filter(dog => dog.name === params.name);
    return(
        <>
            <h1>{`This is ${currDog[0].name}`}</h1>
            <img src={currDog[0].src} alt={currDog[0].name}></img>
            <h2>{`He is ${currDog[0].age}`}</h2>
            <h2>Facts about {currDog[0].name}:</h2>
            {currDog[0].facts.map(fact => (
                <p>{fact}</p>
            ))}
            <Link to="/dogs">Go Back to see my other dogs!!</Link>
        </>
    )
}

export default DogDetails;