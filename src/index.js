import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import state from './redux/state'
import GTable, { subscribe } from "./redux/GTable"

GTable();

const RenderRoot = () => {
    ReactDOM.render(
        <Router>
            <App lang={state.lang} doc={state.google}/>
        </Router>, 
    document.getElementById('root')
    );
}
RenderRoot();

subscribe(RenderRoot);