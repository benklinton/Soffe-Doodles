import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';

function FormLayout() {
    return (
        <Container>
            <div>
                <h1 className='mt-4'>Please fill out this quick application form to help us better understand who you are</h1>
            </div>
            <Form className='mt-4 mb-4'>
                <Form.Row>
                    <Col className='col-md-3'>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </Col>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />

                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Col className='col-md-4'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default FormLayout;