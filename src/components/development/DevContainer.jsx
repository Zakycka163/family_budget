import React from "react";
import Dev from "./Dev";
import PageTitle from "../PageTitle";

const DevContainer = (props) => {
    let page = props.store.getState().elements.page.dev;
    return (
        <div>
            <PageTitle title={page.title} />
            <Dev page={page.content} dispatch={props.store.dispatch}/>
        </div>
    )
}

export default DevContainer;