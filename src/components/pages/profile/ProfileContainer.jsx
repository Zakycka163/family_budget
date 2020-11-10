import Profile from "./Profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        page: state.elements.page.profile
    }
}

const ProfileContainer = connect(mapStateToProps) (Profile);

export default ProfileContainer;