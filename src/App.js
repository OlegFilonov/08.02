import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from '../src/header/header.js'
import Home from '../src/home/home'
import Contact from '../src/contact/contact'


// const App = React.createElement('h1', {}, "Hello World");

function App() {
    return (
        <Router>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/contact' component={Contact}/>
        </Router>
    );
}

export default App;
