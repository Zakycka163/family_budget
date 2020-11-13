import About from "./About";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        page: state.elements.page.about
    }
}

const AboutContainer = connect(mstp) (About);

export default AboutContainer;