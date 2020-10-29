import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/about/About";
import MainPage from "./components/main/MainPage";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={MainPage}/>
        <Route path="/about" component={About}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
