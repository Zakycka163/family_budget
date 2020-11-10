import Dev from "./Dev";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        page: state.elements.page.dev
    }
}

const DevContainer = connect(mapStateToProps) (Dev);

export default DevContainer;