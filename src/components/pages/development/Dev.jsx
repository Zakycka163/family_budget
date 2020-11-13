import React from "react";
import PageTitle from "../PageTitle";

const Dev = (props) => {
        return (
            <div>
                <PageTitle title={props.page.title}/>
                <div className="px-3 py-4 bg-light">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status"/>
                    </div>
                    <p>{props.doc}</p>
                </div>

            </div>
        )
    }

export default Dev;