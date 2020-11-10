import React from "react";
import PageTitle from "../PageTitle";

const Main = (props) => {
    return (
        <div>
            <PageTitle title={props.page.title} />
            <div className="px-3 py-4 bg-light">
                <div className="d-flex justify-content-center">
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Main;