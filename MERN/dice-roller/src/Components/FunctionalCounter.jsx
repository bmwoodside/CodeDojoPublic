import React, { useState } from "react";


const FunctionalCounter = (props) => {

    const [count, setCount] = useState(props.count===undefined?0:props.count);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Decrease Count!</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count!</button>
        </div>
    )
}

export default FunctionalCounter;