import { useEffect, useState } from 'react';
import axios from 'axios';


const GetPokemon = props => {

    const [pokemon, setPokemon] = useState([]);
    const [poke, setPoke] = useState([]);

    useEffect(() => {
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=807")
                .then(response => {setPokemon(response.data.results)})
                .catch(err => {console.log(err);})
        }, [])

        const renderPokemon = () => {
            setPoke(pokemon)
        }

    return (
        <div>
            <button onClick={renderPokemon}>Fetch Pokemon</button>
            <ul>
                {poke.map((pp) => {
                    return <li>{pp.name}</li>
                })}
            </ul>
        </div>
    )
}








export default GetPokemon