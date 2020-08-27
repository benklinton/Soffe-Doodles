import React from 'react';
import Navbar from "./components/navbar";
import Slides from "./components/carousel";
import Section from "./components/section";

function App() {
  return (
    <div>
      <Navbar/>
      <Slides/>
      <Section/>
    </div>
  );
}

export default App;
