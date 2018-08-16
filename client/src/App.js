import React, { Component } from 'react';
import './resources/styles.css';
import { TweenLite, Expo, TimelineLite } from 'gsap';
import ScrollMagic from 'scrollmagic'

import Header from './components/layout/header_footer/Header';
import Featured from './components/featured';
import Contact from './components/layout/contact/Contacts';
import About from './components/layout/About-Us/About';

import Services from './components/layout/Pole/Services';





class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height:"1500px"
      }}>
    
        <Header />
        <Featured />
        <About />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
