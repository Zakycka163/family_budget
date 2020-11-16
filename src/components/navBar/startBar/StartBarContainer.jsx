import {connect} from "react-redux";
import StartBar from "./StartBar";

const mapStateToProps = (state) => {
    let items;
    if (state.profile.is_active !== true) {
        items = state.elements.menu.start_items.filter(e => e.work === false)
    } else {
        items = state.elements.menu.start_items
    }
    return {
        items: items
    }
}

const StartBarContainer = connect(mapStateToProps) (StartBar);

export default StartBarContainer;