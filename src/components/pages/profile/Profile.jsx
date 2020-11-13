import React from "react";
import PageTitle from "../PageTitle";

const Profile = (props) => {
    let page = props.page;
    let creads = props.creads;
    let onLoginUpdate = (e) => {
        props.onLoginUpdate(e.target.value)
    }
    let onPasswordUpdate = (e) => {
        props.onPasswordUpdate(e.target.value)
    }
    return (
        <div>
            <PageTitle title={page.title} />
            <div className="px-3 py-4 bg-light">
                <div className="row mt-3">
                    <div className="col-2">{page.content.login}<span>*</span></div>
                    <div className="col-5">
                        <input className="form-control" type="text" value={creads.login} onChange={onLoginUpdate}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">{page.content.password}<span>*</span></div>
                    <div className="col-5">
                        <input className="form-control" type="password" value={creads.password} onChange={onPasswordUpdate} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input className="btn btn-success btn-sm" type="button" value={page.content.save} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;