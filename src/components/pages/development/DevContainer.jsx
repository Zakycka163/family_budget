import React from "react";
import Dev from "./Dev";
import {getDocThunk, getSheetThunk} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class DevContainer extends React.Component {
    componentDidMount() {
        this.props.getDocThunk(this.props.doc);
    }
    render() {
        return (
            <Dev page={this.props.page} doc={this.props.doc} selectSheet={this.props.getSheetThunk}/>
        )
    }
}

const mstp = (state) => ({
    page: state.elements.page.dev,
    doc: state.googleDoc
})
const mdtp = {getDocThunk, getSheetThunk}

export default compose(
    connect(mstp, mdtp),
    withAuthRedirect
)(DevContainer);
