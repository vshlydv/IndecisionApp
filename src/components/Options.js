import React from "react";
import Option from "./Option.js";

const Options = (props) => (
    <div>
        <div className = "widget-header">
            <h3 className = "widget-header__title">Your Options</h3>
            <button 
                className = "button button--link"
                onClick = {props.handleDeleteAll}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className = "widget__message">Please Add optoins!!!</p>}
        {
            props.options.map((option, index) => 
                <Option 
                    handleDeleteOption = {props.handleDeleteOption} 
                    key = {option} 
                    count = {index + 1}
                    optionText = {option}
                />)
        }
    </div>
);

export default Options;