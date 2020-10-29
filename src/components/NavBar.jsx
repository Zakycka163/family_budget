import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-light sticky-top d-none d-lg-flex">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="btn btn-light" exact to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/about">О системе</NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <input className="btn btn-success" type="button" value="Войти" />
            </form>
        </nav>
    )
}

export default NavBar;