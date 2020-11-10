import React from "react";
import Main from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        page: state.elements.page.main
    }
}

const MainContainer = connect(mapStateToProps) (Main);

export default MainContainer;