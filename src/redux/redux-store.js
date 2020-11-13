import {combineReducers, createStore} from "redux";
import langReducer from "./lang-reducer";
import devReducer from "./dev-reducer";

let reducers = combineReducers({
    elements: langReducer,
    googleDoc: devReducer
});

let store = createStore(reducers);

export default store;