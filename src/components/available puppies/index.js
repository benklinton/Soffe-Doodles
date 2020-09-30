import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function LitterInfo() {
    return (
        <Container>
            <Row>
                <Col id="margin-custom">
                    <img src="https://via.placeholder.com/300x300" id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'> Fern is a beautiful AFC 40lbs standard poodle</h1>
                    </div>
                </Col>
                <Col id="margin-custom">
                    <img src="https://via.placeholder.com/300x300" id='dog-img' alt="pics of puppies"></img>
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
                    <img src="https://via.placeholder.com/1000x300" alt="pics of puppies" style={{ width: '100%' }}></img>
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
                    <img src="https://via.placeholder.com/300x300" id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'> Willow is a gentle AKC Standard Poodle</h1>
                    </div>
                </Col>
                <Col id='non-margin'>
                    <img src="https://via.placeholder.com/300x300" id='dog-img' alt="pics of puppies"></img>
                    <div id='middle'>
                        <h1 id='text'>Desodo is a dashing AKC Bernese Mountain Dog</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col id="margin-break">
                    <img src="https://via.placeholder.com/250x250" alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src="https://via.placeholder.com/250x250" alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src="https://via.placeholder.com/250x250" alt="pics of puppies"></img>
                </Col>
                <Col id="margin-break">
                    <img src="https://via.placeholder.com/250x250" alt="pics of puppies"></img>
                </Col>
            </Row>
            <Row style={{marginBottom: "6rem"}}>
                <Col >
                    <img src="https://via.placeholder.com/400x400" id='dog-img' alt="pics of puppies"></img>
                </Col>
                <Col style={{ textAlign: 'center', marginRight: "3rem", marginTop:"3rem"}}>
                    <h2>
                        Scout our AKC Bernese Moutain Dog will be having her next litter spring of 2021
                    </h2>
                    <h2>
                        Click here to get on her Mini Bernadoodle waiting list
                    </h2>
                    <br></br>
                    <Button variant="outline-info" href="https://forms.gle/HErxqFTS4CBUgZKT8" target='_blank'>Waiting List</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default LitterInfo;