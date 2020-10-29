import React from "react";

const PageTitle = (props) => {
    return (
        <div className="p-2 bg-primary font-weight-bold text-white page-title">
            <h4>{props.name}</h4>
        </div>
    )
}

export default PageTitle;