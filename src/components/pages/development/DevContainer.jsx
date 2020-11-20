import React from "react";
import Dev from "./Dev";
import {getDocThunk} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class DevContainer extends React.Component {
    componentDidMount() {
        this.props.getDocThunk(this.props.doc);
    }
    render() {
        return (
            <Dev page={this.props.page} doc={this.props.doc}/>
        )
    }
}

const mstp = (state) => ({
    page: state.elements.page.dev,
    doc: state.googleDoc
})
const mdtp = {getDocThunk}

export default compose(
    connect(mstp, mdtp),
    withRouter,
    withAuthRedirect
)(DevContainer);
