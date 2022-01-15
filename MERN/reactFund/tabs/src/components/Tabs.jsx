import React, { useState } from "react";



const Tabs = props => {

    const [tabs, setTabs] = useState([
        {header: "Tab 1", content: "Tab 1 Content"},
        {header: "Tab 2", content: "Tab 2 Content"},
        {header: "Tab 3", content: "Tab 3 Content"},
    ]);

    const [activeTab, setActiveTab] = useState([]);

    const updateContent = (obj) => {
        console.log(obj);
        // setActiveTab(obj);
        // document.getElementById("contentContainer").innerText = string;
    }

    let previousButton = null;

    let testArrayFunction = (obj, btnIdx) => {
        setActiveTab(obj[0]["content"]);
        // reset previous button style to default
        if (previousButton !== null) {
            previousButton.style.backgroundColor = "";
        } else if (previousButton === null) {
            previousButton = btnIdx;
        } else {
            console.log("something broke in the testArrayFunction");
        }
        // set current button style to active
        document.getElementById(btnIdx).style.backgroundColor = "yellow";
        // document.getElementsByClassName("tabs-button").getElementById(btnIdx).style.backgroundColor = "blue";

        // set current button to previous button (so we can reset it when the next tab is clicked again)
        previousButton = btnIdx;
    }

    return (
        <>
        <div className="tabs">

            <h1>Tabs:</h1>
            {tabs.map( (tab, i) => 
                <button key={i} id={i} className="tabs-button" onClick={ (e) => testArrayFunction([tab, i]) }>{tab.header}</button>
            )}
        </div>
        
        <div id="contentContainer">{activeTab}</div>
        </>
    )

}

export default Tabs;