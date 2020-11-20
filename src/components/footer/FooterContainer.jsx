import Footer from "./Footer";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        footer: state.elements.footer
    }
}

const FooterContainer = connect(mstp) (Footer);

export default FooterContainer;