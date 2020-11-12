import React from "react";
import PageTitle from "../PageTitle";
import {authCreator} from "../../../redux/dev-reducer";

class Dev extends React.Component {
    componentDidMount() {
        this.props.authCreator();
    }
    render() {
        return (<div>
            <PageTitle title={this.props.page.title}/>
            <div className="px-3 py-4 bg-light">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"/>
                </div>
            </div>
            <button onClick={()=> alert("Hello")}>Click</button>
            {console.log(this.props.status)}
        </div>)
    }
}

export default Dev;