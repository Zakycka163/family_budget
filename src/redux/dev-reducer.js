const SET_DOC_PROP = 'SET_DOC_PROP';
const SET_SHEET_PROP = 'SET_SHEET_PROP';

const initialState = {
    title: '',
    sheetCount: 0,
    sheets: [
        {
            title: '',
            sheetId: null
        }
    ]
}

const devReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOC_PROP:
            return {...state,   title: action.property.title,
                                sheetCount: action.property.sheetCount};
        case SET_SHEET_PROP:
            return {...state,
                    sheets: state.sheets.map((e, i) =>
                        (i === action.index)
                            ? {...e,    title: action.property.title,
                                        sheetId: action.property.sheetId}
                            : e)
            };
        default:
            return state;
    }
}

export const setDocProperty = (property) => ({type: SET_DOC_PROP, property});
export const setSheetProperty = (index, property) => ({type: SET_SHEET_PROP, index, property})

export default devReducer;