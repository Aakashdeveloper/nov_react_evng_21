import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii From React App</h1>
            <h2>My app</h2>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))


/*

var React = require('react');
var ReactDOM = require('react-dom');

function App(){
    return(
        <h1>Hii From React</h1>
    )
}
*/