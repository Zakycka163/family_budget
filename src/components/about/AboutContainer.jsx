import React from "react";
import About from "./About";
import PageTitle from "../PageTitle";

const AboutContainer = (props) => {
    let page = props.store.getState().elements.page.about;
    return (
        <div>
            <PageTitle title={page.title}/>
            <About content={page.content} />
        </div>
    )
}

export default AboutContainer;