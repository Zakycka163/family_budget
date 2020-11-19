import React from "react";
import PageTitle from "../PageTitle";
import Loader from "../../common/Loader";
import Pagination from "../../common/Pagination";
import TableContainer from "./TableContainer";

const Dev = (props) => {
    let pages = [];
    for (let i = 1; i <= props.doc.sheetCount; i++) {
        pages[i] = i;
    }
    return (
        <div>
            <PageTitle title={props.page.title}/>
            <div className="px-3 py-4 bg-light">
                {(props.doc.title !== '')
                    ? <div className="p-1 font-weight-bold page-title"><h5>{props.doc.title}</h5></div>
                    : <Loader />
                }
                <TableContainer />
                <Pagination pages={pages}/>
            </div>
        </div>
    )
}

export default Dev;