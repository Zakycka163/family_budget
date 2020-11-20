import {connect} from "react-redux";
import StartBar from "./StartBar";

const mstp = (state) => ({
    items: state.elements.menu.start_items
})

export default connect(mstp)(StartBar);