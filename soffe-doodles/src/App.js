import React from 'react';
import Navbar from "./components/navbar";
import Slides from "./components/carousel";
import Section from "./components/section";
import Cards from "./components/cards";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <div>
      <Navbar/>
      <Slides/>
      <Section/>
      <Cards/>
      <Testimonial/>
    </div>
  );
}

export default App;
