import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Contact() {
    return (
        <>
            <header className='masthead contact-bg-image'>
                <Container className='h-100'>
                    <Row className='h-100 align-items-center'>
                        <div className='col-lg-12'>
                            <h1 className='mb-4 header-font' style={{ textAlign: 'center' }}> Contact Us</h1>
                        </div>
                    </Row>
                </Container>
            </header>
            <Container className="contain">
                <div>
                    <h1 className='mt-4 mb-4 font-1' style={{ textAlign: 'center' }}>Let Us Know Whats On Your Mind</h1>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffe0MUNqE8uSQDJhTbu1CX-XeD2PYaQPSJ-bDqfKdwnFwyHA/viewform?embedded=true" width="640" height="1170" frameborder="0" marginheight="0" marginwidth="0" id="frame" xs={'auto'} title="Contact">Loading…</iframe>
            </Container>
        </>
    )
}

export default Contact;