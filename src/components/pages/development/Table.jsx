import React from "react";

const Table = (props) => {
    if ( !props.table ) {
        return (<tr><td>Пустой список</td></tr>)
    } else {
        return (
            props.table.map((row, x) => (
                    <tr key={x}>
                        {row._rawData.map((cell,y) => <td key={y}>{cell}</td>) }
                    </tr>
                )
            )
        );
    }
}
export default Table;