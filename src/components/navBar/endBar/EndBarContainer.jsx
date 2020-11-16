import EndBar from "./EndBar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        items: state.elements.menu.end_items
    }
}

const EndBarContainer = connect(mapStateToProps) (EndBar);

export default EndBarContainer;