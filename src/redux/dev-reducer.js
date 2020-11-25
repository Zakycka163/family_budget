import {GoogleSpreadsheet} from "google-spreadsheet";
import settings from "./settings";

const SET_DOC_PROP = 'SET_DOC_PROP';
const SET_SHEET_PROP = 'SET_SHEET_PROP';
const SELECT_SHEET = 'SELECT_SHEET';

const initialState = {
    title: '',
    sheetCount: 0,
    GoogleSpreadsheet: null,
    expiry_date: null,
    current_sheet: 0,
    sheets: []
}

const devReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOC_PROP:
            return {...state, ...action.property};
        case SET_SHEET_PROP:
            return {...state,
                    sheets: (!state.sheets[action.index])
                                ? [...state.sheets, {...action.property}]
                                : state.sheets.map((e, i) =>
                                    (i === action.index)
                                        ? {...e, ...action.property}
                                        : {...e})
            };
        case SELECT_SHEET:
            return {...state, current_sheet: action.index};
        default:
            return state;
    }
}

const setDocProperty = (property) => ({type: SET_DOC_PROP, property});
const setSheetProperty = (index, property) => ({type: SET_SHEET_PROP, index, property});
const selectSheet = (index) => ({type: SELECT_SHEET, index});

export const getDocThunk = (doc) => (dispatch) => {
    auth(doc)
        .then((r) => {
            dispatch(setDocProperty(r));
            let spreadsheet = r.GoogleSpreadsheet;
            for (let i = 0; i < r.sheetCount; i++) {
                let sheet = spreadsheet.sheetsByIndex[i];
                getData(sheet).then(r => {
                    dispatch(setSheetProperty(i, {sheet, title: sheet.title, table: r}))
                })
            }
        });
}

export const getSheetThunk = (sheets, index) => (dispatch) => {
    let sheet = sheets[index].sheet;
    getData(sheet)
        .then(r => {
            dispatch(setSheetProperty(index, {table: r}));
            dispatch(selectSheet(index));
        });
}

const getData = async (sheet) => {
    await sheet.loadCells('A1:C7');
    return sheet._cells;
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