import {accounts} from "./settings";

const LOGIN_CHANGE = 'LOGIN_CHANGE';
const PASS_CHANGE = 'PASS_CHANGE';
const LOGIN = 'LOGIN';

let initialError = {name: '',description: ''};
let login_failed = {name: 'Failed to log in.',description: 'Please make sure that you have entered your login and password correctly.'};

const initialState = {
    login: '',
    password: '',
    error: initialError,
    is_active: false
};

const profileReducer = (state = initialState, action) =>{
    let copyState = {...state, error: initialError, is_active: false};
    switch (action.type){
        case LOGIN_CHANGE:
            return { ...copyState, login: action.value};
        case PASS_CHANGE:
            return { ...copyState, password: action.value};
        case LOGIN:
            if (accounts.findIndex(acc => acc.login === state.login && acc.password === state.password) > -1) {
                return { ...copyState, is_active: true};
            } else {
                return { ...copyState, password: '', error: login_failed};
            }
        default: 
            return state;
    }
}

export const changeLoginCreator = (value) => ({type: LOGIN_CHANGE, value: value});
export const changePassCreator = (value) => ({type: PASS_CHANGE, value: value});
export const loginCreator = () => ({type: LOGIN});

export default profileReducer;