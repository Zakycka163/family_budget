import React from "react";
import {NavLink} from "react-router-dom";
import LangContainer from "./lang/LangContainer";

const EndBar = (props) => {
    return (
        <form className="form-inline">
            <LangContainer />
            <NavLink className="btn btn-success" to="/profile">{props.login}</NavLink>
        </form>
    )
}

export default EndBar;