import React, { Component } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import data from './images.json'
import ImageCard from '../image card';

class Images extends Component {
  state = {
    data,
    images: [],
  }


  render() {
    return (
      <Container>
        <div>
          <div className="card-body">
            <h1 className="title font-1">Dog Gallery</h1>
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

export default Images;

