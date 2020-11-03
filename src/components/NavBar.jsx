import React from "react";
import {NavLink} from "react-router-dom";
import {changeLangCreator} from "../redux/lang-reducer";

const NavBar = (props) => {
    let onLangChange = (e) => {
        let value = e.target.value;
        props.dispatch(changeLangCreator(value));
    }
    return (
        <nav className="navbar bg-light sticky-top d-lg-flex">
            <ul className="nav nav-pills nav-sm">
                <li className="nav-item">
                    <NavLink className="btn btn-light" exact to="/">{props.menu.main.item}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/google-sheet">{props.menu.dev}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/about">{props.menu.about}</NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <select className="custom-select mr-md-3" value={props.menu.lang} onChange={onLangChange}>
                    <option value="en">en</option>
                    <option value="ru">ru</option>
                </select>
                <NavLink className="btn btn-success" to="/login">{props.menu.login}</NavLink>
            </form>
        </nav>
    )
}

export default NavBar;