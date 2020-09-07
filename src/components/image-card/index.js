import React from 'react';
import './style.css';

function ImageCard (props) {
    return (
        <div className='img'>
          <img 
            src={`img/${props.img}`} 
            alt='Images of Dogs'>
          </img>
        </div>
      )
}

export default ImageCard;