import React from "react";
import {setSheetProperty} from "../../../redux/dev-reducer";
import {connect} from "react-redux";
import Table from "./Table";

class TableContainer extends React.Component {
    componentDidUpdate() {

    }
    render(){
        return (
            <table className="table table-bordered table-sm">
                <tbody>
                <Table />
                </tbody>
            </table>
        )
    }
}

const mstp = (state) => ({
    doc: state.googleDoc
})
const mdtp = {setSheetProperty}

export default connect(mstp, mdtp) (TableContainer);