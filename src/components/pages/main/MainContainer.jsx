import React from "react";
import Main from "./Main";
import PageTitle from "../PageTitle";

const MainContainer = (props) => {
    let page = props.store.getState().elements.page.main;
    return (
        <div>
            <PageTitle title={page.title} />
            <Main content={page.content} />
        </div>
    )
}

export default MainContainer;