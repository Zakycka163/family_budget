import React from "react";
import {NavLink} from "react-router-dom";

const EndBar = (props) => {
    return (
        <NavLink className="btn btn-success" to="/profile">{props.login}</NavLink>
    )
}

export default EndBar;