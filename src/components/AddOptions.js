import React from 'react';

class AddOption extends React.Component {

    handleOnSubmit = (e) => {
        e.preventDefault();
        const text = e.target.elements.text.value.trim();
        const error = this.props.handleAddOptions(text);
        if(error === undefined)
            e.target.elements.text.value = ''
    }

    render() {
        return (
            <div>
                <form className = "addOption" onSubmit = {this.handleOnSubmit}>
                    <input className = "addOption__text" type = "text" name = "text"/>
                    <button className = "button">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;