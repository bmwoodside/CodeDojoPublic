import React, { useContext } from "react";
import Form from "./Form";
import { MyContext } from "../context/MyContext";


const FormWrapper = () => {
    const {setUsername} = useContext(MyContext);

    return (
        <div className="nameField">
            <h2>Your Name: </h2>
            <input type="text" name="username" onChange={(e) => {setUsername(e.target.value)}}/>
            
        </div>
    )

}

export default FormWrapper;