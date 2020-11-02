import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import store from './redux/store'

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <App lang={store.getState().lang} doc={store.getState().google} dispatch={store.dispatch.bind(store)}/>
        </Router>, 
    document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);