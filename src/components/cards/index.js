import React from "react";
import './style.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDeck from 'react-bootstrap/CardDeck'

function Cards() {
    return (
        <Container>
            <Row>
                <CardDeck>
                <Card className="card-style">
                    <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="card-style">
                    <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="card-style">
                    <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </CardDeck>
            </Row>
        </Container>
    )
}

export default Cards;