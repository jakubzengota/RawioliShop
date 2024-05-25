import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Where from './components/Where';
import Cooperation from './components/Cooperation';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About/>
      <Where/>
      
      <Footer/>
    </>
  );
}

export default App;