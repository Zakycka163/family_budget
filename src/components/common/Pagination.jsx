import React from "react";
import {NavLink} from "react-router-dom";

const Pagination = (props) => {
    let onSelectSheet = (e) => {
        props.getSheetThunk(props.items, e.target.id);
    }
    return (
        <nav>
            <ul className="pagination pagination-sm justify-content-center">
                {props.items.map( (p, i) => {
                    return (
                        <li className="page-item" key={i} onClick={onSelectSheet}>
                            <NavLink className="btn btn-sm btn-outline-dark" id={i} to={'/google-sheet/'+i}>{p.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;
