import Main from "./Main";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        page: state.elements.page.main
    }
}

const MainContainer = connect(mstp) (Main);

export default MainContainer;