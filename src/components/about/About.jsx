import PageTitle from "../PageTitle";
import React from "react";

const About = (props) => {
    return (
        <div>
            <PageTitle title={props.title}/>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h4>
                        <div className="row">
                            <div className="col-6">Разработчик:</div>
                            <div className="col-6">Ставинский Д.А.</div>
                        </div>
                    </h4>
                    <p className="lead">
                        Система разработана в рамках личного развития.
                    </p>
                    <p>
                        Версия системы - beta.0.1.001.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;