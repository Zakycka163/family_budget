import EndBar from "./EndBar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        login: state.elements.menu.login
    }
}

const EndBarContainer = connect(mapStateToProps) (EndBar);

export default EndBarContainer;