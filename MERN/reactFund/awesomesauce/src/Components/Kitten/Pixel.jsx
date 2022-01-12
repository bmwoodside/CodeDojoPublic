import { Component } from "react";


class Pixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 0,
            colorName: "whitesmoke"
        };
    }

    clickPixel = () => {
        const colors = ["whitesmoke", "red", "orange", "yellow", "green", "blue", "purple"];
        let newIndex = this.state.color + 1 === colors.length ? 0 : this.state.color + 1;
        
        
        this.setState({
            color: newIndex,
            colorName: colors[newIndex]
        });
    }

    render() {
        const style = {
            backgroundColor: this.state.colorName
        }

        return (
            <div onClick={this.clickPixel} onDragOver={this.clickPixel} className="pixel" style={style}>

            </div>
        );
    }








}

export default Pixel;