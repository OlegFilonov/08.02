import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/header.js'
import Home from '../src/components/home/home'
import Contact from '../src/components/contact/contact'
import About from '../src/components/about_us/about'


// const App = React.createElement('h1', {}, "Hello World");

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about-us' component={About}/>
            <Redirect to='/'/>
            </Switch>
        </Router>
    );
}

export default App;
