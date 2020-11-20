import {changeLang} from "../../../../redux/lang-reducer";
import Lang from "./Lang";
import {connect} from "react-redux";

const mstp = (state) => ({
    flags: state.elements.menu.flags
})
const mdtp = {changeLang}

export default connect(mstp, mdtp) (Lang);