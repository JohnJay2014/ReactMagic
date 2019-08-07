import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import * as serviceWorker from './serviceWorker';

let leftElement = <List />

//React 默认会进行HTML的转义， 避免XSS攻击

ReactDOM.render(leftElement, document.getElementById('list'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
