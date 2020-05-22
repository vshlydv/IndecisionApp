class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //Default state
        this.state = {
            count: 0
        };
    }
    
    componentDidMount() {
        try{
            const count = parseInt(localStorage.getItem("count"));
            if(isNaN(count))
                throw "count is not a number"
            this.setState(() => ({ count: count }))
        }
        catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(preProps, preState) {
        if(preProps.count !== this.state.count) {
            localStorage.setItem("count", this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0 
            };
        }
        );
        //Older way (not recommended as suffer form asynchronous nature of this.setState)
        // this.setState ({
        //     count: 0
        // });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//     count += 1;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count -= 1;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const app = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, app);
// }

// renderCounterApp();