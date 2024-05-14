import React, { useState } from "react";

function TrafficLight(){
    const [color, setColor] = useState();
    
    function btnActiveColor(evento){
        setColor(evento.target.id)
    }

    return (
        <div className="container py-3">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="line"></div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="bg-dark container__trafiicLight p-4">
                        <div className={`border border-danger rounded-circle bg-danger circle__trafiicLight  ${color === 'red' ? 'selected' : ''}`} id="red" onClick={btnActiveColor}></div>
                        <div className={`border border-warning rounded-circle bg-warning circle__trafiicLight ${color === 'yellow' ? 'selected' : ''}`} id="yellow" onClick={btnActiveColor}></div>
                        <div className={`border border-success rounded-circle bg-success  circle__trafiicLight ${color === 'green' ? 'selected' : ''}`} id="green" onClick={btnActiveColor}></div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default TrafficLight;