import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "antd";
import {inject} from "mobx-react";


@inject("timer")
class App extends React.Component {

    componentDidMount() {


        setInterval(() => {
            console.log(this.props.timer.elapsedTime);

        }, 1000)

    }

    onClick = (e) => {
        e.preventDefault();
        this.props.timer.tick();
    };

    render() {

        return (
            <div className="App">
                <Button type="primary" onClick={this.onClick}>The Button</Button>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
