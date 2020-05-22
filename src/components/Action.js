import React from "react";

const Action = (props) => (
    <div>
        <button 
            className = "big__button"
            disabled = {!props.hasOptions}
            onClick = {props.handleAction}
        >
            What should I do?
        </button>
    </div>
);

export default Action;