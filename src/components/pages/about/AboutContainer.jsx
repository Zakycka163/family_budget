import React from "react";
import About from "./About";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        page: state.elements.page.about
    }
}

const AboutContainer = connect(mapStateToProps) (About);

export default AboutContainer;