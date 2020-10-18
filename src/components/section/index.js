import React from 'react';
import './style.css';
import image from'./images/Dog-illustration.png';

function Section() {
    return (
        <div className="py-5">
            <div className="container col-md-8 mb-5 mt-5">
                <div className="row">
                    <h1 className="font-1">Who We Are:</h1>
                    <p className="lead font-2">We are making a difference in the puppy breeding world.
                    We are dedicated to raising and training incredible parent dogs so that our puppies are outstanding.
                    We work with our Parent dogs as well as our puppies everyday to insure a happy life for each of them.
                    All of our parent dogs are trained to be therapy companions so that they are ready for their new families after 2 to 3 litters.
                    Soffe Doodles will never over breed. We have a small number of outstanding dogs with calm temperaments that are passed on to their puppies.
                    If you are loooking for an outstanding puddy and its important to buy from a responisble breeder, you have come to the right place
            </p>
                    <div className="img-style">
                        <img src="http://placehold.it/900x300" className= "img-style" alt=""></img>
                    </div>

                </div>
                <div className="row">
                    <h1 className="font-1">Our Promise:</h1>
                    <p className="lead font-2">We are not a puppy mill. Each of our Parent dogs are treated as family members.
                    We keep small numbers of extraordinary dogs to breed and share the small number of puppies we sell.
                    Our females are not over bred.
                    Our home is always open to share the delightful life of raising puppies.
                    (due to covid, we will not be able to have visitors.)
            </p>
                </div>
            </div>
            <div className="section-align">
                <img alt="dog illustration" id="dog-illustration" src={image}></img>
            </div>
        </div>
    )
}

export default Section;