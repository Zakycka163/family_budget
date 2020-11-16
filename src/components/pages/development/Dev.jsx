import React from "react";
import PageTitle from "../PageTitle";
import Loader from "../../common/Loader";

const Dev = (props) => {
    let pages = [];
    for (let i=1; i <= props.doc.sheetCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <PageTitle title={props.page.title}/>
            <div className="px-3 py-4 bg-light">
                {(props.doc.title !== '')
                    ? <div className="p-1 font-weight-bold page-title"><h5>{props.doc.title}</h5></div>
                    : <Loader />
                }
                <p></p>
                {pages.map( p => {
                    return <span key={p}>{p}</span>
                })}
            </div>
        </div>
    )
}

export default Dev;