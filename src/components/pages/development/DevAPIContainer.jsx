import React from "react";
import Dev from "./Dev";
import settings from "../../../redux/settings";
import {GoogleSpreadsheet} from "google-spreadsheet";

class DevAPIContainer extends React.Component {
    componentDidMount() {
        this.auth()
            .then(
                (r) => this.props.setDocProperty(r)
            );
    }
    async auth() {
        const doc = new GoogleSpreadsheet(settings.service.docId);
        await doc.useServiceAccountAuth({
            client_email: settings.service.client_email,
            private_key: settings.service.private_key,
        });
        await doc.loadInfo();
        return {title: doc.title, sheetCount: doc.sheetCount};
    }
    render() {
        return (<Dev page={this.props.page} doc={this.props.doc}/>)
    }
}

export default DevAPIContainer;