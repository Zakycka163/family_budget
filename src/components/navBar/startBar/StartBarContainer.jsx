import {connect} from "react-redux";
import StartBar from "./StartBar";

const mstp = (state) => ({
    items: state.elements.menu.start_items
})

const StartBarContainer = connect(mstp)(StartBar);

export default StartBarContainer;