import React from 'react';
import Navigation from '../components/navbar';
import Header from '../components/header';
import LitterInfo from '../components/available puppies';
import Footer from '../components/footer';
import SocialMedia from '../components/social media';

function Litters () {
    return (
        <>
        <Navigation/>
        <Header/>
        <LitterInfo/>
        <SocialMedia/>
        <Footer/>
        </>
    )
}

export default Litters;