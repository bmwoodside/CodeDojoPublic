import React from "react";
import { Link } from "react-router-dom";

const DMToolsView = (props) => {

    return (
        <div>

            <Link to="/dm/tools/NPCMaker"><button>NPC Generator</button></Link>
            <Link to="/dm/tools/savedNPC"><button>View Saved NPCs</button></Link>

            <Link to="/"><button>Go Back</button></Link>

        </div>
    )
}

export default DMToolsView;