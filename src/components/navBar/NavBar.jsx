import React from "react";
import EndBarContainer from "./endBar/EndBarContainer";
import StartBarContainer from "./startBar/StartBarContainer";

const NavBar = () => {
    return (
        <nav className="navbar bg-light sticky-top d-lg-flex">
            <StartBarContainer />
            <EndBarContainer />
        </nav>
    )
}

export default NavBar;