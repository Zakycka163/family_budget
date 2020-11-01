import {GoogleSpreadsheet} from "google-spreadsheet";
import state from './state';

let RenderRoot = () => {

}
export const subscribe = (observer) => {
    RenderRoot = observer;
}

const GTable = async () => {
    const doc = new GoogleSpreadsheet("1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ");
    await doc.useServiceAccountAuth(require('./family-budget-294015-d25af06bcf48.json'));
    await doc.loadInfo();
    let title = doc.title;
    state.google.name = title;

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    state.google.table = rows;
    RenderRoot();
}

export default GTable;