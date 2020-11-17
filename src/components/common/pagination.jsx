import React from "react";
import {NavLink} from "react-router-dom";

const Pagination = (props) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {props.pages.map( p => {
                    return <li className="page-item" key={p}><NavLink className="page-link" to='#'>{p}</NavLink></li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;