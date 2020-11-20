import Main from "./Main";
import {connect} from "react-redux";

const mstp = (state) => ({
    page: state.elements.page.main
})

const MainContainer = connect(mstp)(Main);

export default MainContainer;