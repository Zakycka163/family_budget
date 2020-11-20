import Main from "./Main";
import {connect} from "react-redux";

const mstp = (state) => ({
    page: state.elements.page.main
})

export default connect(mstp)(Main);