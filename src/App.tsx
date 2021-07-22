import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body/>
      <Gallery/>
    </div>
  );
}

export default App;
