import React from "react";
import {NavLink} from "react-router-dom";

const StartBar = (props) => {
    let menu = props.menu;
    let works_tabs = '';

    return (
        <ul className="nav nav-pills nav-sm">
            <li className="nav-item">
                <NavLink className="btn btn-light" exact to="/">{menu.main}</NavLink>
            </li>
            {works_tabs}
            <li className="nav-item">
                <NavLink className="btn btn-light" to="/google-sheet">{menu.dev}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="btn btn-light" to="/about">{menu.about}</NavLink>
            </li>
        </ul>
    )
}

export default StartBar;