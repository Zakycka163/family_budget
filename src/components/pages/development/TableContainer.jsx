import React from "react";
import Table from "./Table";
import Pagination from "../../common/Pagination";
import {getSheetThunk} from "../../../redux/dev-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class TableContainer extends React.Component {
    componentDidMount() {
        let index = (!this.props.match.params.sheetIndex)
            ? 0
            : this.props.match.params.sheetIndex;
        this.props.getSheetThunk(this.props.sheets ,index);
    }
    render() {
        return (
            <>
                <Table sheet={this.props.sheets[this.props.current_sheet]} />
                <Pagination items={this.props.sheets} getSheetThunk={this.props.getSheetThunk}/>
            </>
        )
    }
}

const mstp = (state) => ({
    current_sheet: state.googleDoc.current_sheet,
    sheets: state.googleDoc.sheets
})
const mdtp = {getSheetThunk}

export default compose(
    connect(mstp, mdtp),
    withRouter
)(TableContainer);