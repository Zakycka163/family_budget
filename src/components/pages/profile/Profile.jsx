import React from "react";
import PageTitle from "../PageTitle";

const Profile = (props) => {
    let page = props.page;
    let creds = props.creds;
    let onLoginUpdate = (e) => {
        props.changeLogin(e.target.value)
    }
    let onPasswordUpdate = (e) => {
        props.changePass(e.target.value)
    }
    let button = (creds.is_auth)
                    ?   <button className="btn btn-danger btn-sm"
                                onClick={props.logout}>
                            {page.content.buttons.signOut}
                        </button>
                    :   <button className="btn btn-success btn-sm"
                                onClick={props.login}>
                            {page.content.buttons.signIn}
                        </button>
    return (
        <div>
            <PageTitle title={page.title} />
            <div className="px-3 py-4">
                <div className="row mt-3 justify-content-center align-items-center">
                    <div className="col-3 col-sm-2 col-md-2 col-lg-1 font-weight-bold">
                        {page.content.login}<span>*</span>
                    </div>
                    <div className="col-6 col-sm-5 col-md-5">
                        <input className="form-control"
                               type="text"
                               value={creds.login}
                               onChange={onLoginUpdate}/>
                    </div>
                </div>
                <div className="row mt-2 justify-content-center align-items-center">
                    <div className="col-3 col-sm-2 col-md-2 col-lg-1 font-weight-bold">
                        {page.content.password}<span>*</span>
                    </div>
                    <div className="col-6 col-sm-5 col-md-5">
                        <input className="form-control"
                               type="password"
                               value={creds.password}
                               onChange={onPasswordUpdate} />
                    </div>
                </div>
                <div className="row mt-1 justify-content-center">
                    {props.notification}
                </div>
                <div className="row mt-1 justify-content-center">
                    <div className="col-3 col-md-2 col-xl-1">
                        {button}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;