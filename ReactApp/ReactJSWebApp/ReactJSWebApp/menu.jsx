class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), name: '' };
    }

    myProcessor() {
        this.setState({ date: new Date() });
        //alert(this.state.date);
    }

    inputChanged(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return <div>Main Menu {this.state.date.toLocaleTimeString()}
            Name: {this.state.name}
            <Input change={this.inputChanged.bind(this)}/>
            <Button clickHandler={this.myProcessor.bind(this)}></Button>
                </div>;
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button onClick={this.props.clickHandler}>Button</button>;
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <input type="text" onChange={this.props.change} />
    }
}