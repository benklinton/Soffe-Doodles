import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LitterInfo() {
    return (
        <Container>
            <Row>
                <Col className="mb-4 mt-4">
                    <img src="https://via.placeholder.com/300x300" alt="pics of puppies"></img>
                </Col>
                <Col className="mb-4 mt-4">
                    <img src="https://via.placeholder.com/300x300" alt="pics of puppies"></img>
                </Col>
                <Col>
                    <h1 className="m-4">
                        Fern + Rex =
               </h1>
                    <h3 className="m-4">
                        F1b mini Red Goldendoodles
                        November 2020
               </h3>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <h3>
                        Fern is a beautiful AFC 40lbs standard poodle
                </h3>
                </Col>
                <Col xs={4}>
                    <h3>
                        Rex is a handsome 27lbs F1 mini Goldendoodle
               </h3>
                </Col>
                <Col>
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
                <Col lg={4}>
                    <img src="https://via.placeholder.com/400x400" alt="pics of puppies"></img>
                </Col>
                <Col style={{ textAlign: 'center' }} lg={8}>
                    <h3>
                        Scout & Cowboy Litter
                    </h3>
                    <h3>
                        June 05, 2020
                    </h3>
                    <h4>
                        (all puppies are reserved)
                    </h4>
                    <h3 className='m-4'>
                        F1 Mini Bernadoodles
                    </h3>
                    <h3>
                        Scouts next litter will be spring 2021
                    </h3>
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