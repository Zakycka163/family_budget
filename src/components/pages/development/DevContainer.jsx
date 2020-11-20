import React from "react";
import Dev from "./Dev";
import {getDocThunk} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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
    doc: state.googleDoc,
    is_auth: state.profile.is_auth
})
const mdtp = {getDocThunk}

export default withAuthRedirect(connect(mstp, mdtp)(DevContainer));
