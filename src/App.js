import React from "react";
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/about/About";
import MainPage from "./components/main/MainPage";
import Dev from "./components/development/Dev";

const App = (props) => {
    let lang = props.lang.en;
  return (
    <Router>
      <div className="App">
        <NavBar menu={lang.menu} />
        <Route exact path="/" render={ () => <MainPage title={lang.menu.main.title} />}/>
        <Route path="/about" render={() => <About title={lang.menu.about} />}/>
        <Route path="/google-sheet" render={() => <Dev title={lang.menu.dev} />}/>
        <Footer city={lang.footer} />
      </div>
    </Router>
  );
}

export default App;
