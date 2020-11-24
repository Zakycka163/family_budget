import React from "react";
import PageTitle from "../PageTitle";
import Loader from "../../common/Loader";
import Table from "./Table";
import Pagination from "../../common/Pagination";

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
                    ? <Table sheet={props.doc.sheets[props.doc.current_sheet]}/>
                    : <Loader />
                }
                <Pagination items={props.doc.sheets} selectSheet={props.selectSheet}/>
            </div>
        </div>
    )
}

export default Dev;