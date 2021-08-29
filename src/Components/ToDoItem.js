import React from "react";
import "./Components.css"



function ToDoItem(props) {

    return (
        <div onClick={() => {
            props.onCheck(props.id)
        }}>
            <li>
                {props.item}
            </li>
        </div>
    );
}





export default ToDoItem;