import Profile from "./Profile";
import {connect} from "react-redux";
import {changeLogin, changePass, login, logout} from "../../../redux/profile-reducer";
import Notification from "../../common/Alert";
import React from "react";

const mstp = (state) => {
    let creads = state.profile;
    let page = state.elements.page.profile;
    return {
        page: page,
        creads: creads,
        notification: (creads.notification.is_error)
                        ? <Notification name={page.notifications.errors[creads.notification.type].name}
                                        description={page.notifications.errors[creads.notification.type].description}/>
                        : (creads.is_auth)
                            ? <Notification type='ok'
                                            name={page.notifications.success.name}
                                            description={page.notifications.success.description} />
                            : null
    }
}

const mdtp = {changeLogin,changePass,login,logout};

const ProfileContainer = connect(mstp,mdtp)(Profile);

export default ProfileContainer;