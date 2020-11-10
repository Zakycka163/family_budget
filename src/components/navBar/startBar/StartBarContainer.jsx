import {connect} from "react-redux";
import StartBar from "./StartBar";

const mapStateToProps = (state) => {
    return {
        menu: state.elements.menu
    }
}

const StartBarContainer = connect(mapStateToProps) (StartBar);

export default StartBarContainer;