import { GoogleSpreadsheet } from "google-spreadsheet";

const LANG_CHANGE = 'LANG_CHANGE';

const initialState = '';

const devReducer = (state=initialState, action) =>{


    return state;
}

export const changeLangCreator = (value) => ({type: LANG_CHANGE, value: value})

export default devReducer;