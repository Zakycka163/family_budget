import React from "react";
import MainPage from "./MainPage";

const MainPageContainer = (props) => {
    let page = props.store.getState().elements.page.main;
    return (
        <MainPage page={page} />
    )
}

export default MainPageContainer;