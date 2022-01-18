import React from "react";

import Counter from "./Counter";

export default () => (
    <Counter 
        initialValue={10}
        render = {({ count, increment, decrement }) => (
            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
                <p>Current Count: {count}</p>
            </div>
        )}
    />
)