import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About'
import Resume from './components/Resume'
import './App.css';
import coverImage from './assets/images/curtains.jpg'


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Header></Header>
      <main>
        <>
          <img src={coverImage} className="coverImage" style={{ width: "100%" }} alt="cover" />
        </>
        {!contactSelected && !aboutSelected && !portfolioSelected && !resumeSelected ? (
          <></>
        ) : (
          <Contact></Contact>,
          <About></About>,
          <Portfolio></Portfolio>,
          <Resume></Resume>
        )
        }
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
