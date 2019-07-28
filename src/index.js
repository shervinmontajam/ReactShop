import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import 'semantic-ui-css/semantic.min.css'
import '@progress/kendo-theme-bootstrap/dist/all.css';
import "./sass/site-default.scss"


import reducers from './app-store/reducers'
import App from './components/app-component/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    <Provider store={createStore(reducers,composeEnhancers(applyMiddleware()))}>
        <App />
    </Provider>, 
    document.querySelector("#root")
);