import React, { useState } from "react";



const Tabs = props => {

    const [tabs, setTabs] = useState([
        {header: "Tab 1", content: "Tab 1 Content"},
        {header: "Tab 2", content: "Tab 2 Content"},
        {header: "Tab 3", content: "Tab 3 Content"},
    ]);



    return (
        <div className="tabs">

            <h1>Tabs:</h1>
            {tabs.map( (tab, i) => 
                <div key={i}>{tab.header}</div>
            )}

        </div>
    )

}

export default Tabs;