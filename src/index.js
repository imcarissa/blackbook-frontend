import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';


// option to put this in its own file and import them into index.js
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let dataStore = createStore(reducer, composeEnhancers(applyMiddleWare(thunk)))

ReactDOM.render (
    <Provider store={dataStore}>
        <App />
    </Provider>,
        document.getElementById('root'));