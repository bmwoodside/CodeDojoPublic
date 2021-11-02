import React, { useState } from "react";

const HookForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <div className="inputForm">
                <p>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } />
                </p>
                <p>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={ (e) => setPassword(e.target.value) }/>
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