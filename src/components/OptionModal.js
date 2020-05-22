import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen = {!!props.selectedOption} //true means modal appears otherwise hidden
            contentLabel = "selected"
            onRequestClose = {props.handleClearSelectOption}
            closeTimeoutMS = {200}
            className = "modal"
        >
            <h3 className = "modal__title">Selected Option</h3>
            <p className = "modal__body">{!!props.selectedOption && props.selectedOption}</p>
            <button className = "button" onClick = {props.handleClearSelectOption}>Okay</button>
        </Modal>
    </div>
)

export default OptionModal;