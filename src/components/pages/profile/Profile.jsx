import React from "react";

const Profile = (props) => {
    return (
        <div className="px-3 py-4 bg-light">
            <div className="row">
                <div className="alert alert-secondary col">
                    <input className="btn btn-success btn-sm" type="button" value={props.content.save} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2">{props.content.login}<span>*</span></div>
                <div className="col-5">
                    <input className="form-control" type="text" value="" maxLength="30" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">{props.content.name}<span>*</span></div>
                <div className="col-5">
                    <input className="form-control" type="text" value="" maxLength="30" />
                </div>
            </div>
        </div>
    )
}

export default Profile;