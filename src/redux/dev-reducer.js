const SET_DOC_PROP = 'SET_DOC_PROP';

const initialState = {
    title: '',
    sheetCount: 0
}

const devReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOC_PROP:
            return {title: action.property.title,
                sheetCount: action.property.sheetCount};
        default:
            return state;
    }
}

export const setDocProperty = (property) => ({type: SET_DOC_PROP, property})

export default devReducer;