import React from "react";
import {NavLink} from "react-router-dom";

const StartBar = (props) => {
    let tabs = props.items.map((e, i) => {
        return  <li className="nav-item ml-2" key={i}>
                    <NavLink className="btn btn-sm btn-outline-dark font-weight-bold" exact to={e.path}>{e.title}</NavLink>
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