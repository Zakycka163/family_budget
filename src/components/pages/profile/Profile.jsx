import React from "react";
import PageTitle from "../PageTitle";

const Profile = (props) => {
    let page = props.page;
    let creads = props.creads;
    let onLoginUpdate = (e) => {
        props.changeLogin(e.target.value)
    }
    let onPasswordUpdate = (e) => {
        props.changePass(e.target.value)
    }
    let onLoginClick = () => {
        props.login()
    }
    let onLogoutClick = () => {
        props.logout()
    }
    let button = (creads.is_auth)
                    ?   <button className="btn btn-danger btn-sm"
                                onClick={onLogoutClick}>
                            {page.content.buttons.signOut}
                        </button>
                    :   <button className="btn btn-success btn-sm"
                                onClick={onLoginClick}>
                            {page.content.buttons.signIn}
                        </button>
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
                {props.notification}
                <div className="row mt-1">
                    <div className="col">
                        {button}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;