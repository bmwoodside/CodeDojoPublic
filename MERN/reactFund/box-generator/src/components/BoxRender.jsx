

function BoxRender(props) {


    return (
        <div>
            <h1>Boxes:</h1>
            <div className="boxContainer">
                {props.boxes.map((box, i) => 
                    <span style={{backgroundColor: box}} key={i} className="box">{box}</span>
                )}
            </div>
        </div>
    )

};

export default BoxRender;