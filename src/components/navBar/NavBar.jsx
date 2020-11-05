import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./Lang";

const NavBar = (props) => {
    return (
        <nav className="navbar bg-light sticky-top d-lg-flex">
            <ul className="nav nav-pills nav-sm">
                <li className="nav-item">
                    <NavLink className="btn btn-light" exact to="/">{props.menu.main}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/google-sheet">{props.menu.dev}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/about">{props.menu.about}</NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <Lang lang={props.menu.lang} dispatch={props.dispatch} />
                <NavLink className="btn btn-success" to="/login">{props.menu.login}</NavLink>
            </form>
        </nav>
    )
}

export default NavBar;