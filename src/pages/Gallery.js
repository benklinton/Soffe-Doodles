import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import BackgroundPage from '../components/background-page';

function Gallery () {
    return (
        <div>
            <Navigation/>
            <BackgroundPage/>
            <Footer/>
        </div>
    )
}

export default Gallery;