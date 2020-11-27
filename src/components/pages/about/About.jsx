import React from "react";
import PageTitle from "../PageTitle";

const About = (props) => {
    let page = props.page;
    return (
        <div>
            <PageTitle title={page.title}/>
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container">
                    <h5 className="row">
                        <div className="col-3">{page.content.position}:</div>
                        <div className="col">{page.content.name}</div>
                    </h5>
                    <p className="lead">
                        {page.content.description}.
                    </p>
                    <p>
                        {page.content.version} - beta.0.1.001.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About;