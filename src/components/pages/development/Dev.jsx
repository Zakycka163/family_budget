import React from "react";
import PageTitle from "../PageTitle";
import Loader from "../../common/Loader";
import TableContainer from "./TableContainer";

const Dev = (props) => {
    return (
        <div>
            <PageTitle title={props.page.title}/>
            <div className="px-3 py-4 bg-light">
                {(props.doc.title !== '')
                    ? <div className="p-1 font-weight-bold page-title"><h5>{props.doc.title}</h5></div>
                    : <Loader />
                }
                {(props.doc.sheetCount > 0 && props.doc.sheetCount === props.doc.sheets.length)
                    ? <TableContainer />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default Dev;