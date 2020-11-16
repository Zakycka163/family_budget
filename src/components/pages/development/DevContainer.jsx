import DevAPIContainer from "./DevAPIContainer";
import {connect} from "react-redux";
import {setDocProperty} from "../../../redux/dev-reducer";


const mstp = (state) => {
    return {
        page: state.elements.page.dev,
        doc: state.googleDoc
    }
}
const mdtp = {setDocProperty}

const DevContainer = connect(mstp, mdtp) (DevAPIContainer);

export default DevContainer;