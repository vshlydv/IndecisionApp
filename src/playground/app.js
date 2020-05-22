class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: [],
            error: undefined
        }
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

    handleDeleteAll() {
        this.setState(() => ({ options: [], error: undefined }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optionToRemove), error: undefined}))
    }

    handleAction() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum]);
    }

    handleAddOptions(option) {
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
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handleAction = {this.handleAction}
                />
                {<p>{this.state.error != undefined && this.state.error}</p>}
                <Options 
                    options = {this.state.options}
                    handleDeleteAll = {this.handleDeleteAll}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOptions = {this.handleAddOptions}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled = {!props.hasOptions}
                onClick = {props.handleAction}
            >
                What should I do?
            </button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick = {
                    (e) => {
                        props.handleDeleteOption(props.optionText);
                    }
                }
            >
                remove
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteAll}>Remove All</button>
            {props.options.length === 0 && <p>Please Add optoins!!!</p>}
            {
                props.options.map((option) => 
                    <Option 
                        handleDeleteOption = {props.handleDeleteOption} 
                        key = {option} 
                        optionText = {option}
                    />)
            }
        </div>
    );
}


class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const text = e.target.elements.text.value.trim();
        const error = this.props.handleAddOptions(text);
        if(error === undefined)
            e.target.elements.text.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    <input type = "text" name = "text"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));