import {GoogleSpreadsheet} from "google-spreadsheet";
import settings from "./settings";

const SET_DOC_PROP = 'SET_DOC_PROP';
const SET_SHEET_PROP = 'SET_SHEET_PROP';

const initialState = {
    title: '',
    sheetCount: 0,
    GoogleSpreadsheet: null,
    expiry_date: null,
    sheets: []
}

const devReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOC_PROP:
            return {...state, ...action.property};
        case SET_SHEET_PROP:
            return {...state,
                    sheets: state.sheets.map((e, i) =>
                        (i === action.index)
                            ? {...e, ...action.property}
                            : e)
            };
        default:
            return state;
    }
}

const setDocProperty = (property) => ({type: SET_DOC_PROP, property});
export const setSheetProperty = (index, property) => ({type: SET_SHEET_PROP, index, property})

export const getDocThunk = (doc) => (dispatch) => {
    auth(doc)
        .then((r) => dispatch(setDocProperty(r)));
}

const auth = async (doc) => {
    let spreadsheet;
    if (!doc.GoogleSpreadsheet) {
        spreadsheet = new GoogleSpreadsheet(settings.service.docId);
        await spreadsheet.useServiceAccountAuth({
            client_email: settings.service.client_email,
            private_key: settings.service.private_key,
        });
    } else {
        spreadsheet = doc.GoogleSpreadsheet;
    }
    await spreadsheet.loadInfo();
    let expiry_date = new Date(spreadsheet.jwtClient.credentials.expiry_date);
    return {
        title: spreadsheet.title,
        sheetCount: spreadsheet.sheetCount,
        GoogleSpreadsheet: spreadsheet,
        expiry_date: expiry_date
    };
}

export default devReducer;