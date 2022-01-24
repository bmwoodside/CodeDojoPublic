import React from "react";
import { useState } from "react";

const Result = props => {


    return (
        <>
            if (props.select === "people") {
                <div>
                    <h1>People Placeholder</h1>
                    {/* <h1>{ props.state.name }</h1> */}

                    {/* <h3>Height: { props.state.height }</h3>
                    <h3>Mass: { props.state.mass }</h3>
                    <h3>Hair Color: { props.state.hairColor }</h3>
                    <h3>Skin Color: { props.state.skinColor }</h3> */}
                </div>
            }
            else if (props.select === "planet") {
                <div>
                    <h1>Planet Placeholder</h1>
                    {/* <h1>{ props.state.name }</h1> */}

                    {/* <h3>Climate: { props.state.climate }</h3>
                    <h3>Terrain: {props.state.terrain }</h3>
                    <h3>Surface Water: { props.state.water }</h3>
                    <h3>Population: { props.state.population }</h3> */}
                </div>
            }
        </>
    );
}

export default Result;