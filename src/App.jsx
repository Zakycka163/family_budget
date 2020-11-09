import React from "react";
import "./App.css"
import {Route} from "react-router-dom";
import NavBarContainer from "./components/navBar/NavBarContainer";
import MainPageContainer from "./components/main/MainPageContainer";
import AboutContainer from "./components/about/AboutContainer";
import FooterContainer from "./components/footer/FooterContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import DevContainer from "./components/development/DevContainer";

const App = (props) => {
    return (
        <div className="App">
            <NavBarContainer store={props.store} />
            <Route exact path="/" render={() => <MainPageContainer store={props.store} />}/>
            <Route path="/about" render={() => <AboutContainer store={props.store} />}/>
            <Route path="/google-sheet" render={() => <DevContainer store={props.store}/>}/>
            <Route path="/profile" render={() => <ProfileContainer store={props.store}/>}/>
            <FooterContainer store={props.store} />
        </div>
    );
}

export default App;
