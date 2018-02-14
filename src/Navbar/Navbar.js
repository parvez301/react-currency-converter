import React, { Component } from 'react';
import logo from '../Assets/logo.svg';

class Navbar extends Component {
    render() {
        return (
            <header class="App-header justify-content-md-center navbar navbar-expand-lg">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Currency Converter using ReactJS</h1>
            </header>
        );
    }
}

export default Navbar;
