import {GoogleSpreadsheet} from "google-spreadsheet";
import * as creads from "./family-budget-294015-a5b7aaae1111.json"

const AUTH = 'AUTH';
//const SET_NAME = 'SET_NAME';

let client_email = creads.client_email;
let private_key = creads.private_key;
const docId = '1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ';
const initialState = '';

const auth = async () => {
    const doc = new GoogleSpreadsheet(docId);
    await doc.useServiceAccountAuth({
        client_email: client_email,
        private_key: private_key,
    });
    await doc.loadInfo();
    return doc.title;
}

const devReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            auth().then(r => {return "Hello"});
        default:
            return state;
    }
}

export const authCreator = () => ({type: AUTH})

export default devReducer;