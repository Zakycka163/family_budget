import React from "react";
import Footer from "./Footer";

const FooterContainer = (props) => {
    let footer = props.store.getState().elements.footer;
    return (
        <Footer state={footer}/>
    )
}

export default FooterContainer;