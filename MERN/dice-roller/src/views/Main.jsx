import { Link } from "react-router-dom";



const Main = () => {

    return (
        <div>
            <h1>Welcome!</h1>

            <Link to="/dice"><button>Dice Roller</button></Link>

            <Link to="/characterMaker"><button>Player Character Randomizer</button></Link>

            <Link to="/dm/tools"><button>DM Tools</button></Link>

        </div>
    )
}

export default Main;