import EndBar from "./EndBar";
import {connect} from "react-redux";

const mstp = (state) => ({
    items: state.elements.menu.end_items.filter((e) => e.is_auth === state.profile.is_auth)
})

const EndBarContainer = connect(mstp)(EndBar);

export default EndBarContainer;