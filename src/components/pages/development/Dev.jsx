import React from "react";
import PageTitle from "../PageTitle";

const Dev = (props) => {
    let page = props.page;
    return (
        <div>
            <PageTitle title={page.title} />
            <div className="px-3 py-4 bg-light">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status" />
                </div>
            </div>
        </div>
    )
}

export default Dev;