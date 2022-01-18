import React, { useContext } from "react";

import { MyContext } from "../context/MyContext";

const Navbar = () => {

    const {username} = useContext(MyContext);

    return (
        <div className="navbar">
            <h1>Hi {username}</h1>
        </div>
    )
}

export default Navbar;