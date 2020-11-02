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
    let GTable = () => {
        props.dispatch({type:'GET-TABLE'});
    }
    return (
        <div>
            <PageTitle title={props.title} />

            <div className="px-3 py-2 bg-success text-white page-title">
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary mr-md-1" onClick={ GTable }>Получить данные о файле</button>
                    <button className="btn btn-primary mr-md-1">Получить листа</button>
                </div>
                <div className="h5">{props.doc.name}</div>
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