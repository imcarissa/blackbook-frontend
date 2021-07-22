import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';

const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let dataStore = createStore(reducer, composeEnhancers(applyMiddleWare(thunk)))

ReactDOM.render (
    <Provider store=(dataStore)>
        <App />
    </Provider>,
        document.getElementById('root'));