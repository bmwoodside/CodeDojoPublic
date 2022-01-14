import React, { useState } from "react";

function BoxMaker(props) {
    const [boxColor, setBoxColor] = useState("");

    return (
        <p>
            Color 
            <input type="text" name="color" onChange={(e) => setBoxColor(e.target.value)} />
            <button onClick={() => props.addBox(boxColor)}>Add Box</button>
        </p>
    )

};

export default BoxMaker;