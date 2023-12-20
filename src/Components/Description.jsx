import React from "react";
import "./description.css"

function Description(props){
    return(
        <div>
            <h3 className="description-title">{props.title}</h3>
            <p className="content">{props.content}</p>
        </div>
    )
}

export default Description;