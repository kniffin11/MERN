import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// npm install axios 
import People from './People'
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import Films from "./Films";


const Results = () => {
    // when a state variable updates, the component rerenderes
    let [attribute, setAttribute] = useState([]);
    // this takes in the route parameters
    const {category, id} = useParams();

    // state var for errors
    let [error, setError] = useState(false);

    // use effect needs the , [] at the end to work 
    // use effect runs this on the first component so it doesnt turn into an infinite loop
    useEffect(()=>{
        // used template literal for dynamic variables
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        // this callback prints the response
        .then(response => {
            setError(false);
            console.log("got the response--> ", response)
            setAttribute(response.data)
        })
        .catch(err=>{
            console.log(err);
            setError(true);
        })
        console.log("doing other stuff");
    // when the state variable(s) in the array changes, the useEffect is ran again
    }, [category, id])


    return (
        <>
            {
            error == true?
            <div className="d-flex flex-column">
                <img src="https://cdn.mos.cms.futurecdn.net/3SiKHrEWDZctBgAMMQEYQJ.jpg" style={{width: "300px"}}></img> 
                <h1>These are not the droids youre looking for</h1>
            </div>:
            // else continue as regular
            // stacked ternary operators that render different components
            category == "people"?
                <People attribute = {attribute}></People>: category == "planets"? 
                <Planets attribute = {attribute}></Planets>: category == "vehicles"? 
                <Vehicles attribute = {attribute}></Vehicles>: category == "films"? 
                <Films attribute = {attribute}></Films>: category == "species"? 
                <Species attribute = {attribute}></Species>: category == "starships"? 
                <Starships attribute = {attribute}></Starships>: null
            }
        </>
    );
}

export default Results;