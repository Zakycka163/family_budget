import React from "react";
import "./App.css"
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import MainContainer from "./components/pages/main/MainContainer";
import AboutContainer from "./components/pages/about/AboutContainer";
import FooterContainer from "./components/footer/FooterContainer";
import ProfileContainer from "./components/pages/profile/ProfileContainer";
import DevContainer from "./components/pages/development/DevContainer";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Route exact path="/" component={MainContainer}/>
            <Route path="/about" component={AboutContainer}/>
            <Route path="/google-sheet/:sheetIndex?" component={DevContainer}/>
            <Route path="/profile" component={ProfileContainer}/>
            <FooterContainer />
        </div>
    );
}

export default App;
