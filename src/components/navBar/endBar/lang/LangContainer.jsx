import {changeLangCreator} from "../../../../redux/lang-reducer";
import Lang from "./Lang";
import {connect} from "react-redux";

const mstp = (state) => {
    return {
        flags: state.elements.menu.flags
    }
}
const mdtp = (dispatch) => {
    return {
        onLangChange: (value) => dispatch(changeLangCreator(value))
    }
}

const LangContainer = connect(mstp, mdtp) (Lang);

export default LangContainer;