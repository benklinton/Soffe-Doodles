import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Header() {
    return (
        <header className='masthead bg-image'>
            <Container className='h-100'>
                <Row className='h-100 align-items-center'>
                    <div className='col-lg-12'>
                        <h1 className='mb-4 header-font' style={{textAlign: 'center'}}> Application</h1>
                    </div>

                </Row>
            </Container>
        </header>
    )
}

export default Header;