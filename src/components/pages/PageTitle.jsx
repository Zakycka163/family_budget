import React from "react";

const PageTitle = (props) => {
    return (
        <div className="p-2 font-weight-bold page-title">
            <h4>{props.title}</h4>
        </div>
    )
}

export default PageTitle;