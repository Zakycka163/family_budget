import React from "react";
import LangContainer from "./lang/LangContainer";
import EndBar from "./EndBar";

const EndBarContainer = (props) => {
    let login = props.store.getState().elements.menu.login;
    return (
        <form className="form-inline">
            <LangContainer store={props.store} />
            <EndBar login={login}/>
        </form>
    )
}

export default EndBarContainer;