import React from "react";
import "./App.css"
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer";
import About from "./components/about/About";
import MainPage from "./components/main/MainPage";
import Dev from "./components/development/Dev";
import Profile from "./components/profile/Profile";

const App = (props) => {
    return (
        <div className="App">
            <NavBar menu={props.state.menu} dispatch={props.dispatch} />
            <Route exact path="/" render={() => <MainPage state={props.state.menu.main} />}/>
            <Route path="/about" render={() => <About state={props.state.menu.about} />}/>
            <Route path="/google-sheet" render={() => <Dev state={props.state.menu.dev} dispatch={props.dispatch}/>}/>
            <Route path="/profile" render={() => <Profile state={props.state.menu.profile} dispatch={props.dispatch}/>}/>
            <Footer city={props.state.footer} />
        </div>
    );
}

export default App;
