import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Col style={{textAlign: 'center'}}>
                    <h1 id="margin-custom" >
                        Fern + Rex =
               </h1>
                    <h3 style={{ marginTop: '5rem'}}>
                        F1b mini Red Goldendoodles
               </h3>
               <h3>
                   November 2020
               </h3>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <h3>
                        Puppies available, contact us for more infomation
               </h3>
                </Col>
            </Row>
            <Row>
                <Col id="margin-break">
                    <img src="https://via.placeholder.com/1000x300" alt="pics of puppies"></img>
                </Col>
            </Row>
            <Row>
            <Col style={{ textAlign: 'left' }} lg={6}>
                    <h3>
                        Scout & Cowboy Litter
                    </h3>
                    <h3>
                        June 05, 2020
                    </h3>
                    <h4>
                        (all puppies are reserved)
                    </h4>
                    <h3>
                        F1 Mini Bernadoodles
                    </h3>
                    <h3 className="mt-4">
                        Scouts next litter will be spring 2021
                    </h3>
                </Col>
                <Col lg={4} style={{marginBottom: '4rem'}}>
                    <img src="https://via.placeholder.com/400x400" alt="pics of puppies"></img>
                </Col>
            </Row>
            <Row>
                <Col className="m-4" style={{textAlign: 'center'}}>
                    <p>
                        We have bred our beautiful Bernese mountain dog Scout to @thepuppyfamily akc moyan tri color poodle named Cowboy. These puppies will be gorgeous! Scout is 60lb and has a very easygoing,
                        and Kind demeanor. Scout's blocky European looks are extraordinary.
                        Cowboy is 30lbs is very smart and has a kind temperament. We are expecting all their pups to have that Classic Teddy Bear look with
                        Tri colors, black and whites and red sables. Puppies will be $2500-3500
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export default LitterInfo;