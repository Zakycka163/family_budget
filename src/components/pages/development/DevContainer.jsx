import React from "react";
import Dev from "./Dev";
import {getDocThunk} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class DevContainer extends React.Component {
    componentDidMount() {
        this.props.getDocThunk(this.props.is_active, this.props.doc);
    }
    render() {
        if (!this.props.is_active) return <Redirect to="/profile" />
        return (
            <Dev page={this.props.page} doc={this.props.doc}/>
        )
    }
}

const mstp = (state) => {
    return {
        page: state.elements.page.dev,
        doc: state.googleDoc,
        is_active: state.profile.is_active
    }
}
const mdtp = {getDocThunk}

export default connect(mstp, mdtp) (DevContainer);
