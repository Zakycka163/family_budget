import EndBar from "./EndBar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        items: (state.profile.is_active === true)
            ? state.elements.menu.end_items.filter(e => e.is_SingIn === true)
            : state.elements.menu.end_items.filter(e => e.is_SingIn === false)
    }
}

const EndBarContainer = connect(mapStateToProps) (EndBar);

export default EndBarContainer;