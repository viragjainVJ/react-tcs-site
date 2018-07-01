import React, { Component } from 'react';
import NavHeader from './Component/header/nav-header';
import './App.css';
import PageContent from "./Component/pageContent/page-content";
import Footer from "./Component/footer/footer-design";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader/>
        <PageContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
