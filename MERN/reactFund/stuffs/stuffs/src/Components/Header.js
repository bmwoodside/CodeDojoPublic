import React, { Component } from "react";
import styles from "./header.css"


const color= 'aquamarine'
const spanStyle = {
    background: color,
    color: "firebrick",
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",

        }
    }

    componentDidUpdate() {
        console.log("Header updated");
    }



    render() {
    return (
        <div>
            <h1>Welcome, { this.props.yournamehere }</h1>
            { this.props.children }
            <span style={spanStyle}>Search</span><input onChange={(e)=>{this.setState({name: e.target.value})}}></input>
            <p>Let's look for { this.state.name }</p>
        </div>
    );
    }
}

export default Header;