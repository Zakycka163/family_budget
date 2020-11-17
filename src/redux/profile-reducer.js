import {accounts} from "./settings";

const LOGIN_CHANGE = 'LOGIN_CHANGE';
const PASS_CHANGE = 'PASS_CHANGE';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

let initialNotification = {type: '', is_error: false};
let login_failed = {type: 'login_fail', is_error: true};
let login_success = {type: 'ok', is_error: false};

const initialState = {
    login: '',
    password: '',
    notification: initialNotification,
    is_active: false
};

const profileReducer = (state = initialState, action) =>{
    let copyState = {...state, notification: initialNotification, is_active: false};
    switch (action.type){
        case LOGIN_CHANGE:
            return { ...copyState, login: action.value};
        case PASS_CHANGE:
            return { ...copyState, password: action.value};
        case LOGIN:
            if (accounts.findIndex(acc => acc.login === state.login && acc.password === state.password) > -1) {
                return { ...copyState, is_active: true, notification: login_success};
            } else {
                return { ...copyState, password: '', notification: login_failed};
            }
        case LOGOUT:
            return { ...initialState};
        default: 
            return state;
    }
}

export const changeLogin = (value) => ({type: LOGIN_CHANGE, value: value});
export const changePass = (value) => ({type: PASS_CHANGE, value: value});
export const login = () => ({type: LOGIN});
export const logout = () => ({type: LOGOUT});

export default profileReducer;