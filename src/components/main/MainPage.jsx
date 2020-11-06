import React from "react";
import PageTitle from "../PageTitle";

const MainPage = (props) => {
    return (
        <div>
            <PageTitle title={props.state.title} />
        </div>
    )
}

export default MainPage;