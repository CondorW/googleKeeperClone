import React, { useState } from "react";
import "./Components.css"



function ToDoItem(props) {
    const [cTextState, sTextState] = useState(false);

    function handleClick(evt) {
        console.log(evt);
        sTextState(prevState =>{
            return(!prevState);
        })
    }

    return (
        <div onClick={handleClick}>      
            <li style={cTextState ? {textDecoration: "line-through"} : null}>
            {props.item}
            </li>
        </div>
    );
}





export default ToDoItem;