import {changeLang} from "../../../../redux/lang-reducer";
import Lang from "./Lang";
import {connect} from "react-redux";

const mstp = (state) => ({
    flags: state.elements.menu.flags
})
const mdtp = {changeLang}

const LangContainer = connect(mstp, mdtp) (Lang);

export default LangContainer;