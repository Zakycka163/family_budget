import React from "react";
import {NavLink} from "react-router-dom";

const StartBar = (props) => {
    let tabs = props.items.map((e, i) => {
        return  <li className="nav-item" key={i}>
                    <NavLink className="btn btn-light" exact to={e.path}>{e.title}</NavLink>
                </li>
        }
    );
    return (
        <ul className="nav nav-pills nav-sm">
            {tabs}
        </ul>
    )
}

export default StartBar;