import React from "react";
import './style.css';
import Card from "react-bootstrap/Card";
import Puppy from './images/Puppy.jpg';

function Testimonial () {
    return (
        <Card className=" text-black custom-style">
        <Card.Img src={Puppy} alt="image of puppy"/>
        <Card.ImgOverlay>
          <Card.Title className="font-1 custom-color font-size">See What People Are Saying</Card.Title>
          {/* <Card.Text className='font-2 custom-color'>
            Testimonial text will go here
          </Card.Text>
          <Card.Text className='font-2 custom-color'>-John Doe</Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    )
}

export default Testimonial;