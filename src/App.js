import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// const App = React.createElement('h1', {}, "Hello World");

function App() {
    return  (
        <Router>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/contact' component={Contact}/>
        </Router>
    );
}

function Home() {
    return (
        <main>
            <h1>Hello world</h1>
            <h2>This is a home page</h2>
            <p>Something new</p>
        </main>
    )
}

function Contact() {
    return (
        <main>
            <h1>Contact us</h1>
            <p>Something new</p>
        </main>
    )
}

function Header() {
    return (
        <header>
            <h1>React App</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact us</Link>
            </nav>
        </header>
            )
    }

export default App;
