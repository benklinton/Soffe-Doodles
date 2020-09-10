import React from "react";
import './style.css';
import Card from "react-bootstrap/Card";

function Testimonial () {
    return (
        <Card className=" text-black custom-style">
        <Card.Img src="https://via.placeholder.com/940x300" alt="Image" style={{display: "block"}} />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Testimonial text will go here
          </Card.Text>
          <Card.Text>-John Doe</Card.Text>
        </Card.ImgOverlay>
      </Card>
    )
}

export default Testimonial;