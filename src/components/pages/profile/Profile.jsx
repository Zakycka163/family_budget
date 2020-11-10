import React from "react";
import PageTitle from "../PageTitle";

const Profile = (props) => {
    let page = props.page;
    return (
        <div>
            <PageTitle title={page.title} />
            <div className="px-3 py-4 bg-light">
                <div className="row">
                    <div className="alert alert-secondary col">
                        <input className="btn btn-success btn-sm" type="button" value={page.content.save} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">{page.content.login}<span>*</span></div>
                    <div className="col-5">
                        <input className="form-control" type="text" value="" maxLength="30" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">{page.content.name}<span>*</span></div>
                    <div className="col-5">
                        <input className="form-control" type="text" value="" maxLength="30" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;