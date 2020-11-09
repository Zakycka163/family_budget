import React from "react";
import PageTitle from "../PageTitle";

const Main = (props) => {
    return (
        <div>
            <PageTitle title={props.page.title} />
        </div>
    )
}

export default Main;