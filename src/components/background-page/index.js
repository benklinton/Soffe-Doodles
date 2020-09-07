import React, { Component } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import data from './images.json'
import ImageCard from '../image-card';

class BackgroundPage extends Component {
  state = {
    data,
    images: [],
  }


  render() {
    return (
      <Container>
        <div class="card border-0 shadow my-5">
          <div class="card-body p-5">
            <h1 class="font-weight-light">Dog Gallery</h1>
            <div>
              {this.state.data.map(item => (
                <ImageCard
                  key={item.img}
                  img={item.img}

                />
              ))
              }
            </div>
          </div>
        </div>
      </Container>
    )
  }

};

export default BackgroundPage;

