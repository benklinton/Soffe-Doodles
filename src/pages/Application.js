import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import Form from '../components/form';
import Header from '../components/header';

function Application() {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Application;