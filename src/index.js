import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import state from './redux/state'
import GTable from "./redux/GTable"

GTable();

let RenderRoot = (props) => {
    ReactDOM.render(
    <Router>
        <App lang={props.lang} doc={props.google}/>
    </Router>, 
    document.getElementById('root')
    );
}
RenderRoot(state);