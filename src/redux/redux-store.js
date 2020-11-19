import {combineReducers, createStore} from "redux";
import langReducer from "./lang-reducer";
import devReducer from "./dev-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    elements: langReducer,
    googleDoc: devReducer,
    profile: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;