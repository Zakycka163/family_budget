import React from "react";
import PageTitle from "../PageTitle";

const tableBody = (table) => {
    if ( table === null) {
        return (
            <tr>
                <td>Пустой список</td>
            </tr>
        )
    } else {
        let x = table.map((row) => (
            <tr>
                {row._rawData.map((cell) => (<td>{cell}</td>)) }
            </tr>
        ));
        return x;
    }
}

const Dev = (props) => {
    return (
        <div>
            <PageTitle title={props.title} />
            <div className="px-3 py-2 bg-success text-white page-title">
                <div className="h5" id="page_title">Test</div>
            </div>
            <div className="px-3 py-4 bg-light">
                {props.doc.name}
                <table className="table table-bordered table-sm">
                    <tbody>
                        {tableBody(props.doc.table)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dev;