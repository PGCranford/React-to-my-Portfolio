import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router className="main-app">
        <Header></Header>

        <main>
          <div className="cover-image">
            <Routes>
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Portfolio" element={<Portfolio />} />
              <Route exact path="/Resume" element={<Resume />} />
            </Routes>
          </div>
        </main>
        <Footer></Footer>
      </Router>
    );
  }
}
export default App;
