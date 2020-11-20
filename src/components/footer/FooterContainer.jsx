import Footer from "./Footer";
import {connect} from "react-redux";

const mstp = (state) => ({
    footer: state.elements.footer
})

export default connect(mstp)(Footer);