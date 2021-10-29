import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.person.firstName,
            lastName: this.props.person.lastName,
            age: this.props.person.age,
            hairColor: this.props.person.hairColor
        }
    }

    birthday = () => this.setState({ age: this.state.age += 1 })

    render() {
        console.log(this.state.age)
        return (
            <div className="person">
                <h1>
                    {this.state.lastName}, {this.state.firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <p>
                    <input type="button" onClick={this.birthday} value="Get Older!"></input>
                </p>
            </div>
        )
    }
}

export default PersonCard;