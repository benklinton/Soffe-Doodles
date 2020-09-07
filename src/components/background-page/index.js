import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';

function BackgroundPage () {
    return (
        <Container>
  <div class="card border-0 shadow my-5">
    <div class="card-body p-5">
      <h1 class="font-weight-light">Dog Gallery</h1>
      <hr></hr>
      <div className="filler"></div>
    </div>
  </div>
  </Container>
    )
} 

export default BackgroundPage;