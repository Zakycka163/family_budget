import settings from "../../../redux/settings";
const accounts = settings.accounts;

const LOGIN_CHANGE = 'LOGIN_CHANGE';
const PASS_CHANGE = 'PASS_CHANGE';
const LOGIN = 'LOGIN';

const initialState = {
    login: '',
    password: '',
    error: '',
    is_active: false
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOGIN_CHANGE:
            return { ...state, login: action.value};
        case PASS_CHANGE:
            return { ...state, password: action.value};
        case LOGIN:
            if (accounts.findIndex(acc => acc.login == state.login && acc.password == state.password) > -1) {
                return { ...state, is_active: true, error: ''};
            } else {
                return { ...state, password: '', is_active: false, error: 'Failed to log in. Please make sure that you have entered your login and password correctly.'};
            }
        default: 
            return state;
    }
}

export const changeLoginCreator = (value) => ({type: LOGIN_CHANGE, value: value});
export const changePassCreator = (value) => ({type: PASS_CHANGE, value: value});
export const loginCreator = () => ({type: LOGIN});

export default profileReducer;