const appObj = {
    title: "Indecision App",
    subtitle: "Lets take some decision",
    option: [],
}

const user = {
    name: 'Vishal Yadav',
    age: 21,
    location: 'Indore',
}

function getLocation(location) {
    if(location) {
        if(location.length > 0)
            return <p>Location: {location}</p>;
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        appObj.option.push(option);
        console.log(option);
        e.target.elements.option.value = "";
        renderApp();
    }
}

const removeOptions = () => {
    appObj.option = [];
    renderApp();
}

const makeDecision = () => {
    const randNum = Math.floor(Math.random() * appObj.option.length);
    alert(appObj.option[randNum]);
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            <p>{(appObj.option && appObj.option.length > 0) ? "Here are your options" : "No options"}</p>
            <button disabled = {appObj.option.length === 0} onClick = {makeDecision}>What should I do?</button>
            <button onClick = {removeOptions}>Remove All</button>
            <ol>
                {
                    appObj.option.map((value) => <li key={value}>{value}</li>)
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add option</button>
            </form>
        </div>
    );    

    ReactDOM.render(template, app);

}

const app = document.getElementById("app");

renderApp();

