import lang from "./lang";

const LANG_CHANGE = 'LANG_CHANGE';

const initialState = lang.en;
const langReducer = (state = initialState, action) =>{
    switch (action.type){
        case LANG_CHANGE:
            if (action.value === 'ru'){
                state = lang.ru;
            } else {
                state = lang.en;
            }
            return state;
        default: return state;
    }
}

export const changeLangCreator = (value) => ({type: LANG_CHANGE, value: value})

export default langReducer;