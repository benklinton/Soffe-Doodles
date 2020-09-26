import React from 'react';
import Navigation from '../components/navbar';
import Header from '../components/header';
import LitterInfo from '../components/available puppies';
import Footer from '../components/footer';

function Litters () {
    return (
        <>
        <Navigation/>
        <Header/>
        <LitterInfo/>
        <Footer/>
        </>
    )
}

export default Litters;