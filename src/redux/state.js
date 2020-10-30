import {GoogleSpreadsheet} from "google-spreadsheet";

const Doc = async () => {
    const doc = new GoogleSpreadsheet("1k_Gg8R0Z6W_UUIqNA_oELWUZZN5hbRU8QQEJTmtigzQ");
    await doc.useServiceAccountAuth(require('./family-budget-294015-d25af06bcf48.json'));
    await doc.loadInfo();
    console.log(doc.title);
    this.setState({name: doc.title});
}
