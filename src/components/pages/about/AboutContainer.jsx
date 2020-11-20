import About from "./About";
import {connect} from "react-redux";

const mstp = (state) => ({
    page: state.elements.page.about
})

export default connect(mstp)(About);