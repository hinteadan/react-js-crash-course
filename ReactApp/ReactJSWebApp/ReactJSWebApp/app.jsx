class App extends React.Component{
    render(){
        return (
            <div>Hello from React Side from separate file</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));