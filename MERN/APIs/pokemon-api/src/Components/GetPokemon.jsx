import React, { useState } from "react";
import axios from "axios";


const GetPokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    return (
        <div>
            <button onClick={() => {
                axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
                    .then(response => { setPokemon(response.data.results) })
            }}
            >Fetch Pokemon</button>

            <ul>
                {pokemon.map( (onePokemon, i) => {
                    return <li key={i}>{onePokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default GetPokemon;