import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About'
import Resume from './components/Resume'
import Home from './components/Home';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {


  return (


    <Router className="main-app">
      <div>
        <Header></Header>
        <main>
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
              element={<Home />}
            />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
