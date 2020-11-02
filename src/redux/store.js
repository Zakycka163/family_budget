import { GoogleSpreadsheet } from "google-spreadsheet";

let store = {
    _state: {
        lang : require("./lang.json"),
        google:{
            name : "Wait",
            table: []
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type === 'GET-TABLE') {
            this._table();
        }
    },
    async _table() {
        const doc = new GoogleSpreadsheet("1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ");
        await doc.useServiceAccountAuth(require('./family-budget-294015-d25af06bcf48.json'));
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        let title = sheet.title;
        this._state.google.name = title;
        this._state.google.table = rows;
        this._callSubscriber();
    }
}

export default store;