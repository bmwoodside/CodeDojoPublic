import React, { useEffect, useState } from "react";
import Result from "./Result";
import axios from "axios";

const Form = props => {

    const [myForm, setMyForm] = useState([])
    const [select, setSelect] = useState("people")
    const [renderData, setRenderData] = useState([])


    const handleFormSubmit = e => {
        e.preventDefault();
        // Handle form submission
        if (e.target.name === "select") {
            // change route to /people or /planet

            // pass select value to Result component

            // pass id to Result component
            //combined? set state?

            // pass state to Result component?
            // props.setState(myForm);
        }

        console.log(myForm)
        console.log(select)
        console.log(myForm.item)

    }

    useEffect(() => {
    axios.get("https://swapi.dev/api/${myForm.select}/${myForm.item}")
        .then(response => {setRenderData(response.data.results)})
        .catch(err => {console.log(err);})
    }, [])

    const onChangeHandler = e => {
        setMyForm({
            ...myForm,
            [e.target.name]: e.target.value
        })

    }

    return (
        <>
            <form onSubmit={handleFormSubmit} className="myForm">
                <h3>Search for:</h3>
                <select name="select" id="" onChange={onChangeHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <h3>ID:</h3>
                <input type="number" name="item" id="itemID" onChange={onChangeHandler} value={myForm.item}/>
                <input type="submit" value="Search" />
            </form>

            {/* <Result /> */}

            {console.log(renderData)}
        </>
    )
    


}


export default Form;