import { GoogleSpreadsheet } from "google-spreadsheet";

let store = {
    _state: {
        lang: {},
        google: {
            name: "Wait",
            table: []
        },
        profile: {
            name: "",
            service_account: {
                client_email: "",
                private_key: "",
                status: ""
            },
            google_tables: [
                {
                    sheetId: "1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ",
                    sheetlists: []
                }
            ]
        }
    },
    async _table() {
        const doc = new GoogleSpreadsheet("1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ");
        await doc.useServiceAccountAuth(require('./family-budget-294015-a5b7aaae1111'));
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        let title = sheet.title;
        this._state.google.name = title;
        this._state.google.table = rows;
    }
}

export default store;