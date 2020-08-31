import React from 'react';
import Navbar from "./components/navbar";
import Slides from "./components/carousel";
import Section from "./components/section";
import Cards from "./components/cards"

function App() {
  return (
    <div>
      <Navbar/>
      <Slides/>
      <Section/>
      <Cards/>
    </div>
  );
}

export default App;
