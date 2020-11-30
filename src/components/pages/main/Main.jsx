import React from "react";
import PageTitle from "../PageTitle";

const Main = (props) => {
    return (
        <div>
            <PageTitle title={props.page.title} />
            <div className="px-3 py-4">
                <div className="d-flex justify-content-center">
                    <p>Test</p>
                </div>
            </div>
        </div>
    )
}

export default Main;