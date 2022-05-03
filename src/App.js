import React from 'react';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ButtonToTop from './Components/ButtonToTop/ButtonToTop';
import { IsMobile } from './Components/Responsive/Responsive';
import Buttons from './Components/Mobile/Buttons';

function App() {
  return <>
    <Header />
    <Navbar />
    {IsMobile() && <Buttons />}
    <ButtonToTop />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
}

export default App;