import React from "react";
import Dev from "./Dev";

const DevContainer = (props) => {
    let state = props.store.getState().elements;
    return (
        <Dev page={state.page.dev} dispatch={props.store.dispatch}/>
    )
}

export default DevContainer;