import React from "react";

const TableBody = (table) => {
    if ( table === null) {
        return (<tr><td>Пустой список</td></tr>)
    } else {
        let x = table.map((row, x) => (
            <tr key={x}>
                {row._rawData.map((cell,y) => (<td key={y}>{cell}</td>)) }
            </tr>
        ));
        return x;
    }
}