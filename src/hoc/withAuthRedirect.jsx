import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mstp = (state) => ({
    is_auth: state.profile.is_auth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.is_auth) return <Redirect to="/profile" />

            return <Component {...this.props} />
        }
    }

    return connect(mstp)(RedirectComponent);
}