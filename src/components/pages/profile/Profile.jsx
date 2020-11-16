import React from "react";
import PageTitle from "../PageTitle";

const Profile = (props) => {
    let page = props.page;
    let creads = props.creads;
    let error = creads.error;
    let notification = (error.name !== '')
        ? <div className="row alert alert-danger mt-2">
            <b>{error.name}</b>&nbsp;
            {error.description}
          </div>
        : (creads.is_active === true)
            ? <div className="row alert alert-success mt-2">Login successful</div>
            : null
    let onLoginUpdate = (e) => {
        props.onLoginUpdate(e.target.value)
    }
    let onPasswordUpdate = (e) => {
        props.onPasswordUpdate(e.target.value)
    }
    let onLoginClick = () => {
        props.onLogin()
    }
    return (
        <div>
            <PageTitle title={page.title} />
            <div className="px-3 py-4 bg-light">
                <div className="row mt-3">
                    <div className="col-2">
                        {page.content.login}<span>*</span>
                    </div>
                    <div className="col-5">
                        <input className="form-control"
                               type="text"
                               value={creads.login}
                               onChange={onLoginUpdate}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {page.content.password}<span>*</span>
                    </div>
                    <div className="col-5">
                        <input className="form-control"
                               type="password"
                               value={creads.password}
                               onChange={onPasswordUpdate} />
                    </div>
                </div>
                {notification}
                <div className="row mt-1">
                    <div className="col">
                        <button className="btn btn-success btn-sm"
                                onClick={onLoginClick}>
                            {page.content.save}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;