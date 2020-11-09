import React from "react";
import {NavLink} from "react-router-dom";
import LangContainer from "./endBar/lang/LangContainer";

const NavBar = (props) => {
    let works_tabs = '';

    return (
        <nav className="navbar bg-light sticky-top d-lg-flex">
            <ul className="nav nav-pills nav-sm">
                <li className="nav-item">
                    <NavLink className="btn btn-light" exact to="/">{props.menu.main.title}</NavLink>
                </li>
                {works_tabs}
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/google-sheet">{props.menu.dev.title}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/about">{props.menu.about.title}</NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <LangContainer store={props.store} />
                <NavLink className="btn btn-success" to="/profile">{props.menu.login}</NavLink>
            </form>
        </nav>
    )
}

export default NavBar;