import Dev from "./Dev";
import {connect} from "react-redux";
import {authCreator} from "../../../redux/dev-reducer";

const mapStateToProps = (state) => {
    return {
        page: state.elements.page.dev,
        doc: state.stateGoogle
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        authCreator: () => dispatch(authCreator())
    }
}

const DevContainer = connect(mapStateToProps, mapDispatchToProps) (Dev);

export default DevContainer;