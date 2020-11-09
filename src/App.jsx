import React from "react";
import "./App.css"
import {Route} from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/about/About";
import MainPage from "./components/main/MainPage";
import Dev from "./components/development/Dev";
import Profile from "./components/profile/Profile";
import NavBarContainer from "./components/navBar/NavBarContainer";

const App = (props) => {
    let state = props.store.getState().elements;
    return (
        <div className="App">
            <NavBarContainer store={props.store}  />
            <Route exact path="/" render={() => <MainPage state={state.menu.main} />}/>
            <Route path="/about" render={() => <About state={state.menu.about} />}/>
            <Route path="/google-sheet" render={() => <Dev state={state.menu.dev} dispatch={props.store.dispatch}/>}/>
            <Route path="/profile" render={() => <Profile state={state.menu.profile} dispatch={props.store.dispatch}/>}/>
            <Footer city={state.footer} />
        </div>
    );
}

export default App;
