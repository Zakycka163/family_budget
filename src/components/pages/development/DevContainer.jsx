import DevAPIContainer from "./DevAPIContainer";
import {connect} from "react-redux";
import {setDocName} from "../../../redux/dev-reducer";
import * as creads from "../../../redux/family-budget-294015-a5b7aaae1111.json";

const client_email = creads.client_email;
const private_key = creads.private_key;
const docId = '1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ';

const mstp = (state) => {
    return {
        page: state.elements.page.dev,
        doc: state.googleDoc,
        client_email: client_email,
        private_key: private_key,
        docId: docId
    }
}
const mdtp = (dispatch) => {
    return {
        setDocName: (val) => dispatch(setDocName(val))
    }
}

const DevContainer = connect(mstp, mdtp) (DevAPIContainer);

export default DevContainer;