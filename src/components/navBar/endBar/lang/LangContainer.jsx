import React from "react";
import {changeLangCreator} from "../../../../redux/lang-reducer";
import Lang from "./Lang";

const LangContainer = (props) => {
    let flags = props.store.getState().elements.menu.flags;
    let onLangChange = (value) => {
        props.store.dispatch(changeLangCreator(value));
    }
    return (
        <Lang changeLang={onLangChange} flags={flags} />
    )
}

export default LangContainer;