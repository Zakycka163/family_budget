import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import store from './redux/redux-store'
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </Router>,
    document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);