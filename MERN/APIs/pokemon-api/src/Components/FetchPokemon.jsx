import React, { useState } from "react";


const FetchPokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    return (
        <div>
            <button onClick={() => {
                fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
                    .then(response => response.json())
                    // .then(data => console.log(data));
                    .then(data => setPokemon(data.results))
            }}
            >Fetch Pokemon</button>

            <ul>
                {pokemon.map((onePokemon, i) => {
                    return <li key={i}>{onePokemon.name}</li>
                    })}
            </ul>
        </div>
    )
}

export default FetchPokemon;