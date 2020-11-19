import {applyMiddleware, combineReducers, createStore} from "redux";
import langReducer from "./lang-reducer";
import devReducer from "./dev-reducer";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    elements: langReducer,
    googleDoc: devReducer,
    profile: profileReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;