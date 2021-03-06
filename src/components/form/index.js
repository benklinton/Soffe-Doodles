import React from 'react';
import Container from 'react-bootstrap/Container';
import './style.css';

function FormLayout() {
    return (
        <Container className="contain">
            <div>
                <h1 className='mt-4 mb-4 font-1' style={{textAlign:'center'}}>Please fill out the application</h1>
            </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyRRZ1KzUw_C5csh0RHAUk5dPEdAkdyJH5Viey_SEpAwXdTw/viewform?embedded=true" width="640" height="1170" frameborder="0" marginheight="0" marginwidth="0" id="frame" xs={'auto'} title='Application'>Loading…</iframe>
        </Container>
    )
}

export default FormLayout;