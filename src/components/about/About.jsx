import PageTitle from "../PageTitle";
import React from "react";

const About = () => {
    return (
        <div>
            <PageTitle name="О системе"/>
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
                        Версия системы - beta.0.2.001.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;