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
        let x = table.map((row, x) => (
            <tr key={x}>
                {row._rawData.map((cell,y) => (<td key={y}>{cell}</td>)) }
            </tr>
        ));
        return x;
    }
}

const Dev = (props) => {
    let GTable = props.actions;
    return (
        <div>
            <PageTitle title={props.title} />
            <div className="px-3 py-2 bg-success text-white page-title">
                <div className="h5">{props.doc.name}</div>
                <button className="" onClick={GTable}>Обновить</button>
            </div>
            <div className="px-3 py-4 bg-light">
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