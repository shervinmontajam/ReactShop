import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'semantic-ui-css/semantic.min.css'
import "./sass/site-default.scss"


import reducers from './app-store/reducers'
import App from './components/app-component/App';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector("#root")
);