import React from "react";
import Main from "./Main";

const MainContainer = (props) => {
    let page = props.store.getState().elements.page.main;
    return (
        <Main page={page} />
    )
}

export default MainContainer;