import {combineReducers, createStore} from "redux";
import langReducer from "./lang-reducer";

let reducers = combineReducers({
    lang: langReducer
});

let store = createStore(reducers);

export default store;