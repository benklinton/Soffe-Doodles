import React from 'react';
import Navigation from "../components/navbar";
import Slides from "../components/carousel";
import Section from "../components/section";
import Cards from "../components/cards";
import Testimonial from "../components/testimonial";
import SocialMedia from "../components/social media";
import Footer from "../components/footer";


function Home() {
  return (
    <div>
      <Navigation/>
      <Slides/>
      <Section/>
      <Cards/>
      <Testimonial/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default Home;
