import EndBar from "./EndBar";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        items: state.elements.menu.end_items.filter(e => e.is_active === state.profile.is_active)
    }
}

const EndBarContainer = connect(mstp) (EndBar);

export default EndBarContainer;