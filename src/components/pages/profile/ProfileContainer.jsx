import Profile from "./Profile";
import {connect} from "react-redux";
import {changeLoginCreator, changePassCreator} from "../../../redux/profile-reducer";

const mstp = (state) => {
    return {
        page: state.elements.page.profile,
        creads: state.profile
    }
}

const mdtp = (dispatch) => {
    return {
        onLoginUpdate: (val) => dispatch(changeLoginCreator(val)),
        onPasswordUpdate: (val) => dispatch(changePassCreator(val))
    }
}

const ProfileContainer = connect(mstp,mdtp) (Profile);

export default ProfileContainer;