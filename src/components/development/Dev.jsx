import React from "react";
import PageTitle from "../PageTitle";

const Dev = (props) => {
    return (
        <div>
            <PageTitle title={props.title} />
            <div className="px-3 py-2 bg-success text-white page-title">
                <div className="h5" id="page_title">Test</div>
            </div>
            <div className="px-3 py-4 bg-light">
                ПРВЫЛОРРМ
            </div>
        </div>
    )
}

export default Dev;