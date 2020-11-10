import lang from "./lang";

const LANG_CHANGE = 'LANG_CHANGE';

const initialState = lang.en;
const langReducer = (state = initialState, action) =>{
    switch (action.type){
        case LANG_CHANGE:
            if (action.value === 'ru'){
                return lang.ru;
            } else {
                return lang.en;
            }
        default: return state;
    }
}

export const changeLangCreator = (value) => ({type: LANG_CHANGE, value: value})

export default langReducer;