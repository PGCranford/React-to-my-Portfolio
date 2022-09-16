import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import About from './components/About'


import './App.css';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header></Header>
      <Navigation
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >

      </Navigation>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
        <Footer></Footer>
      </main>
    </div>

  );
}

export default App;
