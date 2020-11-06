import React from "react";
import "./App.css"
import {Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer";
import About from "./components/about/About";
import MainPage from "./components/main/MainPage";
import Dev from "./components/development/Dev";

const App = (props) => {

  return (
    <div className="App">
      <NavBar menu={props.state.lang.menu} dispatch={props.dispatch} />
      <Route exact path="/" render={ () => <MainPage title={props.state.lang.menu.main} />}/>
      <Route path="/about" render={() => <About state={props.state.lang.menu.about} />}/>
      <Route path="/google-sheet" render={() => <Dev title={props.state.lang.menu.dev} dispatch={props.dispatch}/>}/>
      <Footer city={props.state.lang.footer} />
    </div>
  );
}

export default App;
