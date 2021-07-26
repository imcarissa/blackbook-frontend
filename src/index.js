import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import groupReducer from './reducers/groupReducer';

import App from './App';


// option to put this in its own file and import them into index.js
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let groupStore = createStore(groupReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render (
    <Provider store={groupStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
        document.getElementById('root'));