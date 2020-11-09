import React from "react";
import PageTitle from "../PageTitle";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    let page = props.store.getState().elements.page.profile;
    return (
        <div>
            <PageTitle title={page.title} />
            <Profile content={page.content}/>
        </div>
    )
}

export default ProfileContainer;