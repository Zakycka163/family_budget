const LOGIN_CHANGE = 'LOGIN_CHANGE';
const PASS_CHANGE = 'PASS_CHANGE';

const initialState = {
    login: '',
    password: ''
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOGIN_CHANGE:
            return { ...state, login: action.value};
        case PASS_CHANGE:
            return { ...state, password: action.value};
        default: return state;
    }
}

export const changeLoginCreator = (value) => ({type: LOGIN_CHANGE, value: value});
export const changePassCreator = (value) => ({type: PASS_CHANGE, value: value});

export default profileReducer;