import React, { Component } from 'react';
import './App.css';
import SubLoader from "./components/SubLoader";

export default class App extends Component {
    
    constructor() {
        super();
        this.state = {
            content: <SubLoader sub="reactjs" newPage={this.newPage.bind(this)}/>
        }
    }
    
    newPage = content => this.setState({content});
    
    render() {
        return (
            <div>
                <h1>Welcome to Reddit</h1>
                {this.state.content}
            </div>
        );
    }
}