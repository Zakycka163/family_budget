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

export const setDocProperty = (property) => ({type: SET_DOC_PROP, property});
export const setSheetProperty = (index, property) => ({type: SET_SHEET_PROP, index, property})

export default devReducer;