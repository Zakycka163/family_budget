import React from "react";

const Table = (props) => {
    let body;
    if ( !props.sheet.table ) {
        body = <tr><td>Пустой список</td></tr>;
    } else {
        body = props.sheet.table.map((row, x) => (
                    <tr key={x}>
                        {row.map((cell,y) => <td key={y}>{cell.value}</td>) }
                    </tr>
                    )
                );
    }
    return (
        <table className="table table-sm table-bordered table-hover">
            <tbody>
                {body}
            </tbody>
        </table>
    )
}
export default Table;