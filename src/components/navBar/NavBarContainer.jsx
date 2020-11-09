import React from "react";
import StartBar from "./startBar/StartBar";
import EndBarContainer from "./endBar/EndBarContainer";

const NavBarContainer = (props) => {
    let menu = props.store.getState().elements.menu;
    return (
        <nav className="navbar bg-light sticky-top d-lg-flex">
            <StartBar menu={menu}/>
            <EndBarContainer store={props.store}/>
        </nav>
    )
}

export default NavBarContainer;