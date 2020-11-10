import React from "react";
import Footer from "./Footer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        footer: state.elements.footer
    }
}

const FooterContainer = connect(mapStateToProps) (Footer);

export default FooterContainer;