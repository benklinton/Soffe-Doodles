import React from "react";
import './style.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from 'react-bootstrap/CardDeck';
import Puppy1 from './images/Puppy1.jpg';
import Puppy2 from './images/Puppies.jpg';
import Puppy3 from './images/Puppy2.jpg';

function Cards() {
    return (
        <Container>
            <Row>
                <CardDeck>
                <Card className="card-style">
                    <Card.Img variant="top" src={Puppy1} />
                    <Card.Body>
                        <Card.Title>Application</Card.Title>
                        <Card.Text>
                            Interested in owning a puppy? Fill out our application
                        </Card.Text>
                        <Button variant="outline-info" href="/application">Click Here</Button>
                    </Card.Body>
                </Card>

                <Card className="card-style">
                    <Card.Img variant="top" src={Puppy2} />
                    <Card.Body>
                        <Card.Title>Available Puppies</Card.Title>
                        <Card.Text>
                            Check out our available puppies page for this season's litter
                        </Card.Text>
                        <Button variant="outline-info" href='/avaliable-puppies'>Click Here</Button>
                    </Card.Body>
                </Card>

                <Card className="card-style">
                    <Card.Img variant="top" src={Puppy3} />
                    <Card.Body>
                        <Card.Title>Contact Us</Card.Title>
                        <Card.Text>
                            Questions, comments, concerns? Drop us a line real quick
                        </Card.Text>
                        <Button variant="outline-info">Click Here</Button>
                    </Card.Body>
                </Card>
                </CardDeck>
            </Row>
        </Container>
    )
}

export default Cards;