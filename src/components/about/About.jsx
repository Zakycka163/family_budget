import PageTitle from "../PageTitle";
import React from "react";

const About = (props) => {
    return (
        <div>
            <PageTitle title={props.state.title}/>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h4>
                        <div className="row">
                            <div className="col-6">{props.state.content.position}:</div>
                            <div className="col-6">{props.state.content.name}</div>
                        </div>
                    </h4>
                    <p className="lead">
                        {props.state.content.description}.
                    </p>
                    <p>
                        {props.state.content.version} - beta.0.1.001.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;