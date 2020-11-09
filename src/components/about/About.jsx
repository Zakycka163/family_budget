import PageTitle from "../PageTitle";
import React from "react";

const About = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h5 className="row">
                    <div className="col-3">{props.content.position}:</div>
                    <div className="col">{props.content.name}</div>
                </h5>
                <p className="lead">
                    {props.content.description}.
                </p>
                <p>
                    {props.content.version} - beta.0.1.001.
                </p>
            </div>
        </div>
    )
}

export default About;