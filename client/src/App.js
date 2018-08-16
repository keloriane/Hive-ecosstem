import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layout/header_footer/Header';
import Featured from './components/featured';
import Contact from './components/layout/contact/Contacts';
import About from './components/layout/About-Us/About';





class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height:"1500px"
      }}>
    
        <Header />
        <Featured />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
