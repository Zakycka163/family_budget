import React from "react";
import * as s from "./Table.module.css"

const Table = (props) => {
    let body;
    if ( !props.sheet.table ) {
        body = <tr><td>Пустой список</td></tr>;
    } else {
        body = props.sheet.table.map((row, x) => (
                    <tr key={x}>
                        {row.map((cell,y) => <td key={y} title={cell.formula}>{cell.value}</td>) }
                    </tr>
                    )
                );
    }
    return (
        <table>
            <tbody>
                {body}
            </tbody>
        </table>
    )
}
export default Table;