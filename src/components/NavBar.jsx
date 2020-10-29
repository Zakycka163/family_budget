import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-light sticky-top d-lg-flex">
            <ul className="nav nav-pills nav-sm">
                <li className="nav-item">
                    <NavLink className="btn btn-light" exact to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-light" to="/about">О системе</NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <NavLink className="btn btn-success" to="/login">Войти</NavLink>
            </form>
        </nav>
    )
}

export default NavBar;