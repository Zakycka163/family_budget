import React from "react";
import Dev from "./Dev";
import {GoogleSpreadsheet} from "google-spreadsheet";

class DevAPIContainer extends React.Component {
    componentDidMount() {
        this.auth()
            .then(
                (r) => this.props.setDocName(r)
            );
    }
    async auth() {
        const doc = new GoogleSpreadsheet(this.props.docId);
        await doc.useServiceAccountAuth({
            client_email: this.props.client_email,
            private_key: this.props.private_key,
        });
        await doc.loadInfo();
        return doc.title;
    }
    render() {
        return (<Dev page={this.props.page} doc={this.props.doc}/>)
    }
}

export default DevAPIContainer;