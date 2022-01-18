import React, { useState } from "react";

// this file is the logic behind any component that calls for a counter.
// it is a component that takes an initial value (if any) and a render function as arguments.


export default ({ initialValue = 0, render }) => {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return render({ count, increment, decrement})
}