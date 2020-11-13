import React from "react";
import PageTitle from "../PageTitle";
import Loader from "../../Loader";

const Dev = (props) => {
        return (
            <div>
                <PageTitle title={props.page.title}/>
                <div className="px-3 py-4 bg-light">
                    <div className="d-flex justify-content-center">
                        {(props.doc.title !== '')
                            ? <div>{props.doc.title}</div>
                            : <Loader />
                        }
                    </div>
                </div>
            </div>
        )
    }

export default Dev;