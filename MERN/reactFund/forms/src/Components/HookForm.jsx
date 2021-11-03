import React, { useState } from "react";

const HookForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required.")
        }
        else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 or more characters!")
        }
        else {
            setFirstNameError("")
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("First Name is required.")
        }
        else if (e.target.value.length < 2) {
            setLastNameError("First Name must be 2 or more characters!")
        }
        else {
            setLastNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is Required.")
        }
        else if (e.target.value.length < 5) {
            setEmailError("Email must be longer than 5 characters.")
        }
        else {
            setEmailError("")
        }
    }

    // this doesn't properly validate the password... probably get help.
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password >= 8 && password !== confirmPassword) {
            setPasswordError("Passwords do not match.")
        }

        if (e.target.value.length < 1) {
            setPasswordError("Password is required.")
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 or more characters")
        }
        else {
            setPasswordError("")
        }
    }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    //     if (password !== confirmPassword) {
    //         return setPasswordError("Passwords do not match")
    //     }
    //     if (password < 8 || confirmPassword < 8) {
    //         return setPasswordError("Password is too short")
    //     }
    // }


    return (
        <div>
            <div className="inputForm">
                <p>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={ handleFirstName } />
                    {
                        firstNameError
                        ? <p style={{color: "red"}}>{ firstNameError }</p>
                        : null
                    }
                </p>
                <p>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={ handleLastName } />
                    {
                        lastNameError
                        ? <p style={{color: "red"}}>{ lastNameError }</p>
                        : null
                    }
                </p>
                <p>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={ handleEmail } />
                    {
                        emailError
                        ? <p style={{color: "red"}}>{ emailError }</p>
                        : null
                    }
                </p>
                <p>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={ handlePassword }/>
                    {
                        passwordError
                        ? <p style={{color: "red"}}>{ passwordError }</p>
                        : null
                    }
                </p>
                <p>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="text" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </p>
            </div>

            <div className="formData">
                <p>
                    First Name: {firstName}
                </p>
                <p>
                    Last Name: {lastName}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Password: {password}
                </p>
                <p>
                    Confirm Password: {confirmPassword}
                </p>
            </div>

        </div>
    )
}


export default HookForm;