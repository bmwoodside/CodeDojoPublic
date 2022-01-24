import axios from "axios";
import React, { useState, useEffect } from "react";
import { Switch, Route, useParams, Link, useHistory } from "react-router-dom";


const Result = (props) => {

    // const history = useHistory();
    
    const {id, select} = useParams();
    const [homeworld, setHomeworld] = useState("");
    const [homeworldURL, setHomeworldURL] = useState("");

    useEffect(() => {
        axios.get(props.formData.homeworld)
            .then(response => {
                setHomeworld(response.data)
                setHomeworldURL(response.data.url)
            })
            .catch(err => (console.log(err)))
        }, [props.formData.homeworld])

    return (
        <Switch>
            <Route path="/people/:id">
                <p>Name: {props.formData.name}</p>
                <p>Hair Color: {props.formData.hair_color}</p>
                <p>Eye Color: {props.formData.eye_color}</p>
                <p>Height: {props.formData.height}</p>
                <p>Homeworld: {homeworld.name} <Link to={{pathname: `/planets/`+homeworldURL.split('/').reverse().splice(1).shift()}} >Link</Link></p>
            </Route>

            <Route path="/planets/:id">
                <p>Name: {props.formData.name}</p>
                <p>Climate: {props.formData.climate}</p>
                <p>Surface Water: {props.formData.surface_water}</p>
                <p>Terrain Biomes: {props.formData.terrain}</p>
            </Route>

            <Route path="/starships/:id">
                <p>Name: {props.formData.name}</p>
                <p>Passenger Count: {props.formData.passengers}</p>
                <p>Length: {props.formData.length}</p>
                <p>Cargo Capacity: {props.formData.cargo_capacity}</p>
            </Route>

            <Route path="/error">
                <p>These aren't the droids you're looking for</p>
                <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=600"/>
            </Route>
        </Switch>
    )
}

export default Result;