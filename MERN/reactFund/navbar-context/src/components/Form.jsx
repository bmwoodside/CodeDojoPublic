import React, { useState } from "react";

const Form = props => {

    const [fullName, setFullName] = useState("");

    return (
        <div className="nameField">
            <h2>Your Name: </h2>
            <input type="text" name="fullName" />
        </div>
    )
}

export default Form;