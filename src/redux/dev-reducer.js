const SET_DOC_NAME = 'SET_DOC_NAME';

const initialState = '';

const devReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOC_NAME:
            return action.name;
        default:
            return state;
    }
}

export const setDocName = (name) => ({type: SET_DOC_NAME, name})

export default devReducer;