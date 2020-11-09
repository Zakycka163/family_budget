import React from "react";
import PageTitle from "../PageTitle";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    let state = props.store.getState().elements;
    return (
        <Profile page={state.page.profile} dispatch={props.store.dispatch}/>
    )
}

export default ProfileContainer;