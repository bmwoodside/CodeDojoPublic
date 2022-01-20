import React, { useContext, useState } from "react";
import BigState from "../context/BigState";

const Form = props => {

    const [fullName, setFullName] = useState("");
    const {form, setForm} = useContext(BigState);

    return (
        // <div className="nameField">
        //     <h2>Your Name: </h2>
        //     <input type="text" name="fullName" />
        // </div>

        <div>
            <input type="text" className="form-control" onChange={(e) => setForm(e.target.value)}/>
        </div>
    )
}

export default Form;