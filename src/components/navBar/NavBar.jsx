import React from "react";
import EndBarContainer from "./endBar/EndBarContainer";
import StartBarContainer from "./startBar/StartBarContainer";

const NavBar = () => {
    return (
        <nav className="navbar bg-transparent sticky-top">
            <StartBarContainer />
            <EndBarContainer />
        </nav>
    )
}

export default NavBar;