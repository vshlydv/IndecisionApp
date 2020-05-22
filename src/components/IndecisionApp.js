import React from "react";
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOptions";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        error: undefined,
        selectedOption: undefined
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options)
            this.setState((preState) => ({
            options: options
            }))
        }
        catch(e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.options.length != prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleDeleteAll = () => {
        this.setState(() => ({ options: [], error: undefined }));
    }

    handleClearSelectOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove), error: undefined}));
    }

    handleAction = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        this.setState((preState) => ({selectedOption: this.state.options[randomNum]}));
    }

    handleAddOptions = (option) => {
        let error = undefined
        if(!option)  {
            error = "Cann't add an empty option.";
        }
        else {
            if(this.state.options.indexOf(option) > -1) {
                error = "Entered option already exists.";
            }
        }
        this.setState((prevState) => {
            if(error) {
                return {
                    error
                }
            }
            return {
                options: prevState.options.concat(option),
                error: undefined
            }
        })
        return error;
    }

    render() {
        const subtitle = "Put your life in the hands of the computer."
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className = "container">
                    <Action 
                        hasOptions = {this.state.options.length > 0}
                        handleAction = {this.handleAction}
                    />
                    <div className = "widget">
                        <Options 
                            options = {this.state.options}
                            handleDeleteAll = {this.handleDeleteAll}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        {this.state.error != undefined &&<p className = "widget__error">{this.state.error}</p>}
                        <AddOption handleAddOptions = {this.handleAddOptions}/>
                    </div>    
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectOption = {this.handleClearSelectOption}
                />
            </div>
        )
    }
}
