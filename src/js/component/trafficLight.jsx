import React, { useState } from "react";

function TrafficLight(){
    const [color, setColor] = useState();
    
    function btnActiveColor(evento){
        setColor(evento.target.id)
    }

    return (
        <div className="container bg-dark py-3" style={{width: "7%"}}>
            <div className={`border border-danger rounded-circle bg-danger ${color === 'red' ? 'selected' : ''}`} id="red" onClick={btnActiveColor} style={{width:"90px", height: "90px"}}></div>
            <div className={`border border-warning rounded-circle bg-warning ${color === 'yellow' ? 'selected' : ''}`} id="yellow" onClick={btnActiveColor} style={{width:"90px", height: "90px"}}></div>
            <div className={`border border-success rounded-circle bg-success ${color === 'green' ? 'selected' : ''}`} id="green" onClick={btnActiveColor} style={{width:"90px", height: "90px"}}></div>
        </div>
    )
}

export default TrafficLight;