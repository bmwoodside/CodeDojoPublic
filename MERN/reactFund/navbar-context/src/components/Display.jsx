import React, { useContext } from "react";
import BigState from "../context/BigState";

const Display = (props) => {
    const {form, state} = useContext(BigState);
    return (
        <div>
            <h1>your context: {form}</h1>
            <h2>the other state: {state}</h2>
        </div>
    )
}

export default Display;