import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from './images/Dog.jpg';

function SocialMedia() {
    return (
       <Container className="container-fluid content mb-4">
            <h1>Follow Us On Social Media</h1>
            <Row className="d-flex justify-content-center">
            <div className=" col-12 mt-4"><img alt='' src={Image}></img></div>
            </Row>
            <Row className="d-flex justify-content-center media">
            <a className="flex mt-4 mx-1" href="https://www.facebook.com/soffefarm" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook fa-4x"></i></a>
            <a className="flex mt-4 mx-1" href="https://www.instagram.com/soffedoodles" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-4x"></i></a>
            <a className="flex mt-4 mx-1" href="https://www.youtube.com/channel/UCr37J-facdyDROvJrGXOdrA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-4x"></i></a>
            </Row>
                
            
       </Container>
    )
}

export default SocialMedia;