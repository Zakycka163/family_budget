import React from "react";
import Dev from "./Dev";
import {getDocThunk, selectSheet} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class DevContainer extends React.Component {
    componentDidMount() {
        this.props.getDocThunk(this.props.doc);
        let index = (!this.props.match.params.sheetIndex)
                        ? 0
                        : this.props.match.params.sheetIndex;
        this.props.selectSheet(index);
    }
    render() {
        return (
            <Dev page={this.props.page} doc={this.props.doc} selectSheet={this.props.selectSheet}/>
        )
    }
}

const mstp = (state) => ({
    page: state.elements.page.dev,
    doc: state.googleDoc
})
const mdtp = {getDocThunk, selectSheet}

export default compose(
    connect(mstp, mdtp),
    withRouter,
    withAuthRedirect
)(DevContainer);
