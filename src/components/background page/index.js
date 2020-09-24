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
        <div className="card border-0 shadow my-5">
          <div className="card-body">
            <h1 className="font-weight-light title">Dog Gallery</h1>
              {this.state.data.map(item => (
                <ImageCard
                  key={item.img}
                  img={item.img}

                />
              ))
              }
          </div>
        </div>
      </Container>
    )
  }

};

export default BackgroundPage;

