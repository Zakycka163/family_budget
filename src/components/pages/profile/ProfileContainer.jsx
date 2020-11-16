import Profile from "./Profile";
import {connect} from "react-redux";
import {changeLogin, changePass, login} from "../../../redux/profile-reducer";
import Notification from "../../common/alert";
import React from "react";

const mstp = (state) => {
    let creads = state.profile;
    let page = state.elements.page.profile;
    return {
        page: page,
        creads: creads,
        notification: (creads.notification.is_error === true)
                        ? <Notification name={page.notifications.errors[creads.notification.type].name}
                                        description={page.notifications.errors[creads.notification.type].description}/>
                        : (creads.is_active === true)
                        ? <Notification type='ok'
                                        name={page.notifications.success.name}
                                        description={page.notifications.success.description} />
                        : null
    }
}

const mdtp = {changeLogin,changePass,login};

const ProfileContainer = connect(mstp,mdtp) (Profile);

export default ProfileContainer;