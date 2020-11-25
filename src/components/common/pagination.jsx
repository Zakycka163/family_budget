import React from "react";
import {NavLink} from "react-router-dom";

const Pagination = (props) => {
    let onSelectSheet = (e) => {
        props.getSheetThunk(props.items, e.target.id);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {props.items.map( (p, i) => {
                    return (
                        <li className="page-item" key={i} onClick={onSelectSheet}>
                            <NavLink className="page-link" id={i} to={'/google-sheet/'+i}>{p.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;