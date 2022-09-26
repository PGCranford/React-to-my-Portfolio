import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About'
import Resume from './components/Resume'
import Home from './components/Home';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (

      <Router className="main-app" >

        <div className="cover-image" >
          <Header></Header>

          <main>
            <div className="cover-image">
              <Routes>
                <Route
                  path="/Contact"
                  element={<Contact />}
                />
                <Route
                  path="/About"
                  element={<About />}
                />
                <Route
                  path="/Portfolio"
                  element={<Portfolio />}
                />
                <Route
                  path="/Resume"
                  element={<Resume />}
                />
                <Route
                  path='/'
                // element={<App />}
                />
              </Routes>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </Router>

    );
  }
}
export default App;
