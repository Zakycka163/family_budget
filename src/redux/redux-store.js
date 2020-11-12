import {combineReducers, createStore} from "redux";
import langReducer from "./lang-reducer";
import devReducer from "./dev-reducer";

let reducers = combineReducers({
    elements: langReducer,
    stateGoogle: devReducer
});

let store = createStore(reducers);

export default store;