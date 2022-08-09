import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    // state variables
    let [pokemonList, setPokemonList] = useState([]);
    // this is for useEffect 
    let [count, setCount] = useState(0);

    // ---------------------------------------------------------------------------

    // function -- api call or api request -- this is without axios or useEffect

    /*const getPokemon = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
            .then(response => {
                return response.json()
            })
            .then(convertedResponse =>{
                console.log("got the response--> ", convertedResponse)
                // make sure to set the pokemon list to the array, in order for mapping to work
                setPokemonList(convertedResponse.results)
            })
            .catch(err => {
                console.log("Something went wrong", err)
            })
        console.log("doing other stuff");
    }*/

    // ---------------------------------------------------------------------------

    // function -- api call || api request -- this is with axios but not useEffect
    // dont forget to install axios -- npm install axios in terminal

    /*const getPokemon = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then( convertedResponse=>{
                // make sure to console.log to check where the array is for setting the list
                console.log("got the response--> ", convertedResponse) 
                setPokemonList(convertedResponse.data.results)
            })
            .catch(err=>{
                console.log("something went wrong",err)
            })
        console.log("doing other stuff");
    }*/

    // ----------------------------------------------------------------------------

    // this is using axios and useEffect
    // this renders as soon as the component is mounted - thats why they are dispalyed immediately, only the firsrt two examples are used for 
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
            .then(response=>{
                console.log("got the response--> ", response)
                // make sure to console.log to check where the array is for setting the list
                setPokemonList(response.data.results)
            })
            .catch(err=>{
                console.log("something went wrong",err)
            })
    }, [count]); 

    return (
        <>
            <br></br>
            {/* 
            -- this is the syntax without useEffect (with or without axios)
            <button onClick={getPokemon}>Fetch Pokemon</button>
            */}
            <button onClick={()=>setCount(count + 1)}>Fetch Pokemon</button>
            {
                // maps only work with []'s, not obj's
                pokemonList.map((pokemon, index)=>{
                    return <p key={index}>{pokemon.name}</p>
                })
                
            }
        </>
    )
}

export default Pokemon;