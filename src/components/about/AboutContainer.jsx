import React from "react";
import About from "./About";

const AboutContainer = (props) => {
    let page = props.store.getState().elements.page.about;
    return (
       <About page={page} />
    )
}

export default AboutContainer;