import React from "react";
import {NavLink} from "react-router-dom";
import LangContainer from "./lang/LangContainer";

const EndBar = (props) => {
    let buttons = props.items.map((e, i) => {
            return <NavLink className="btn btn-sm btn-success" key={i} exact to={e.path}>{e.title}</NavLink>
        }
    );
    return (
        <form className="form-inline">
            <LangContainer />
            {buttons}
        </form>
    )
}

export default EndBar;