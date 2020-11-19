import React from "react";
import Dev from "./Dev";
import settings from "../../../redux/settings";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {setDocProperty} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class DevContainer extends React.Component {
    componentDidMount() {
        if (this.props.is_active) {
            this.auth(this.props.doc)
                .then(
                    (r) => this.props.setDocProperty(r)
                );
        }
    }
    async auth(doc) {
        let spreadsheet;
        if (!doc.GoogleSpreadsheet){
            spreadsheet = new GoogleSpreadsheet(settings.service.docId);
            await spreadsheet.useServiceAccountAuth({
                client_email: settings.service.client_email,
                private_key: settings.service.private_key,
            });
        } else{
            spreadsheet = doc.GoogleSpreadsheet;
        }
        await spreadsheet.loadInfo();
        let expiry_date = new Date(spreadsheet.jwtClient.credentials.expiry_date);
        return {
            title: spreadsheet.title,
            sheetCount: spreadsheet.sheetCount,
            GoogleSpreadsheet: spreadsheet,
            expiry_date: expiry_date
        };
    }
    render() {
        return (this.props.is_active
                    ? <Dev page={this.props.page} doc={this.props.doc}/>
                    : <Redirect to="/" />
            )
    }
}

const mstp = (state) => {
    return {
        page: state.elements.page.dev,
        doc: state.googleDoc,
        is_active: state.profile.is_active
    }
}
const mdtp = {setDocProperty}

export default connect(mstp, mdtp) (DevContainer);
