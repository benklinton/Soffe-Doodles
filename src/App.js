import React from 'react';
import Navbar from "./components/navbar";
import Slides from "./components/carousel";
import Section from "./components/section";
import Cards from "./components/cards";
import Testimonial from "./components/testimonial";
import SocialMedia from "./components/social media";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Slides/>
      <Section/>
      <Cards/>
      <Testimonial/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default App;
