import React from "react";

class TableBody extends React.Component {
    render(){
        return (<tr><td>Пустой список</td></tr>)
    }
}

const TableBody2 = (table) => {
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