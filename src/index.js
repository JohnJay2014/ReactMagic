import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './List';
import Count from './Count';
import * as serviceWorker from './serviceWorker';

const element = <App />
const leftElement = <List />
const count = <Count />

//React 默认会进行HTML的转义， 避免XSS攻击

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(leftElement, document.getElementById('list'));
ReactDOM.render(count, document.getElementById('count'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
