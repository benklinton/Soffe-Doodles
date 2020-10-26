import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import image from'./images/Dog-illustration.png';
import Doggies from './images/Doggies.jpg';

function Section() {
    return (
        <div className="py-5">
            <Container className="col-md-8 mb-5 mt-5">
                <Row>
                    <h1 className="font-1 media">Who We Are:</h1>
                    <p className="lead font-2 media">We are making a difference in the puppy breeding world.
                    We are dedicated to raising and training incredible parent dogs so that our puppies are outstanding.
                    We work with our parent dogs as well as our puppies everyday to insure a happy life for each of them.
                    All of our parent dogs are trained to be therapy companions so that they are ready for their new families after 2 to 3 litters.
                    Soffe Doodles will never over breed. We have a small number of outstanding dogs with calm temperaments that are passed on to their puppies.
                    If you are loooking for an outstanding puppy and its important to buy from a responisble breeder, you have come to the right place.
                    </p>

                    <div className="media">
                        <img src={Doggies} className= "img-style" alt=""></img>
                    </div>

                </Row>
                <Row>
                    <h1 className="font-1 media">Our Promise:</h1>
                    <p className="lead font-2 media">We are not a puppy mill. Each of our Parent dogs are treated as family members.
                    We keep small numbers of extraordinary dogs to breed and share the small number of puppies we sell.
                    Our females are not over-bred.
                    Our home is always open to share the delightful life of raising puppies
                    (due to COVID-19 we will not be able to have visitors).
                    </p>
                </Row>

            </Container>
            <div className="section-align">
                <img alt="dog illustration" id="dog-illustration" src={image}></img>
            </div>
        </div>
    )
}

export default Section;