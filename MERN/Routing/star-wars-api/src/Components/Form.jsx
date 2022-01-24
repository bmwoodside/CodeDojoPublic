import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Form = (props) => {

    const [userForm, setUserForm] = useState({
        selectField: "planets",
        idField: "",
    });

    const history = useHistory();

    const onSubmitHandler = (e) => {

        // todo: If I had to do this over, I think that the
        // axios call needs to be moved to the Result component

        e.preventDefault();
        // make API call
        axios.get(`https://swapi.dev/api/${userForm.selectField}/${userForm.idField}`)
            .then(response => {
                props.formData(response.data);
                history.push(`/${userForm.selectField}/${userForm.idField}`);
            })
            .catch(err => {
                // console.log(err);
                history.push("/error");
            });
    }

    const onChangeHandler = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="selectField">
                    <select name="selectField" id="selectField" onChange={onChangeHandler}>
                        <option value="planets">Planets</option>
                        <option value="people">People</option>
                        <option value="starships">Spaceships</option>
                    </select>
                </label>

                <label htmlFor="itemID">
                    ID: 
                    <input type="text" name="idField" onChange={onChangeHandler} />
                </label>

                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Form;