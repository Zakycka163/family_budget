import {changeLangCreator} from "../../../../redux/lang-reducer";
import Lang from "./Lang";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        flags: state.elements.menu.flags
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLangChange: (value) => dispatch(changeLangCreator(value))
    }
}

const LangContainer = connect(mapStateToProps, mapDispatchToProps) (Lang);

export default LangContainer;