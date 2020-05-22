class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swtch: 0
        };
        this.toggleSwtch = this.toggleSwtch.bind(this);
    }

    toggleSwtch() {
        this.setState((prevState) => {  
            return {
                swtch: prevState.swtch ^ 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.toggleSwtch}>{this.state.swtch ? 'Hide details' : 'Show details'}</button>
                {this.state.swtch == 1 && <p>Hey, there we are here!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let flag = 0;

// const toggleFlag = (e) => {
//     flag ^= 1;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggleFlag}>{flag === 0 ? "Show details" : "Hide details"}</button>
//             {flag === 1 && <p>Hey, there we are here!!!</p>}
//         </div>
//     )

//     ReactDOM.render(template, app);
// }

// const app = document.getElementById("app");

// renderApp();