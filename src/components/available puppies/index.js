import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fern from './images/Fern.jpg';
import Rex from './images/Rex.jpg';
import Willow from './images/Willow.jpg';
import Desodo from './images/Desodo.jpg';
import Scout from './images/Scout.jpg';
import Puppy1 from './images/Puppy1.jpg';
import Puppy2 from './images/Puppy2.jpg';
import Puppy3 from './images/Puppy3.jpg';
import Puppy4 from './images/Puppy4.jpg';
import Puppy5 from './images/Puppy5.jpg';
import Puppy6 from './images/Puppy6.jpg';
import Puppy7 from './images/Puppy7.jpg';
import Puppy8 from './images/Puppy8.jpg';


function LitterInfo() {
    return (
        <Container>
            <Row>
                <Col id="margin-custom">
                    <img src={Fern} id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'> Fern is a beautiful AFC 40lbs standard poodle</h1>
                    </div>
                </Col>
                <Col id="margin-custom">
                    <img src={Rex} id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'>Rex is a handsome 27lbs F1 mini Goldendoodle </h1>
                    </div>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <h1 id="margin-custom" >
                        Fern + Rex =
               </h1>
                    <h3 style={{ marginTop: '3rem' }}>
                        F1b mini Red Goldendoodles
               </h3>
                    <h3>
                        November 2020
               </h3>
                    <h3 style={{ marginTop: '2rem' }}>
                        Puppies available, contact us for more infomation
               </h3>
                </Col>
            </Row>
            <Row>
            <Col id="margin-break">
                    <img src={Puppy1} alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src={Puppy2} alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src={Puppy3} alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src={Puppy4} alt="pics of puppies"></img>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: 'center', marginRight: "3rem" }}>
                    <h1>
                        Willow + Desodo =
               </h1>
                    <h3 style={{ marginTop: '3rem' }}>
                        F1 Bernadoodles
               </h3>
                    <h3>
                        November 2020
               </h3>
                    <h3 style={{ marginTop: '2rem' }}>
                        Puppies available, contact us for more infomation
               </h3>
                </Col>
                <Col id='non-margin'>
                    <img src={Willow} id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'> Willow is a gentle AKC Standard Poodle</h1>
                    </div>
                </Col>
                <Col id='non-margin'>
                    <img src={Desodo} id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'>Desodo is a dashing AKC Bernese Mountain Dog</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col id="margin-break">
                    <img src={Puppy5} alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src={Puppy6} alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src={Puppy7} alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src={Puppy8} alt="pics of puppies"></img>
                </Col>
            </Row>
            <Row style={{marginBottom: "6rem"}}>
                <Col >
                    <img src={Scout} id='dog-img' alt="pics of puppies"></img>
                </Col>
                <Col style={{ textAlign: 'center', marginRight: "3rem", marginTop:"3rem"}}>
                    <h2>
                        Scout our AKC Bernese Moutain Dog will be having her next litter spring of 2021
                    </h2>
                    <h2>
                        Click here to get on her Mini Bernadoodle waiting list
                    </h2>
                    <br></br>
                    <Button variant="outline-info" href="https://forms.gle/HErxqFTS4CBUgZKT8" target='_blank'>Waiting List</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default LitterInfo;