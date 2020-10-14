import React from 'react';
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fern from './images/Fern.jpg';
import Willow from './images/Willow.jpg';
import Scout from './images/Scout.jpg';
import Lettie from './images/Lettie.jpg';
import Cooper from './images/Cooper.jpg';
import Rex from './images/Rex.jpg';
import Ollie from './images/Ollie.jpg';

function DogInfo() {
    return (
        <>
        <header className='masthead' id="bg-image">
            <Container className='h-100'>
                <Row className='h-100 align-items-center'>
                    <div className='col-lg-12'>
                        <h1 className='display-4 text-black mb-4' style={{textAlign: 'center'}}> Sires and Dames</h1>
                    </div>

                </Row>
            </Container>
        </header>
            <Container>
                <h1 className="mt-5 text-center">Poodle Dames</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Fern} alt='pics of dogs' className=" mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Fern</h1>
                        <p>Fern is an AKC Standard Poodle who loves to retrieve her yard toys.
                        She has a lot of energy, extremely soft fur and is very loving around the family and friends.
                        She adores the water and would play out in the yard all day.</p>
                        <br />
                        <p>Breed: AKC Standard Poodle</p>
                        <br />
                        <p>Weight: 45 lbs</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Willow} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Willow</h1>
                        <p>Willow is an AKC Royal Sable Poodle.
                        Her full name is Willomena Fancy Prance because she is very dainty and loves to prance around the yard like a beauty queen.
                        She has a gentle bite and is very affectionate with children and other dogs.
                        </p>
                        <br />
                        <p>Breed:  AKC Royal Poodle</p>
                        <br />
                        <p>Weight: 55 lbs</p>
                    </Col>
                </Row>
                <h1 className="text-center">Bernese Mountain Dog Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Scout} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Scout</h1>
                        <p>Scout is an AKC Bernese Mountain Dog.
                        She loves to be outside, and playing in the snow.
                        Scout has a short nose with a blocky head that makes her one good looking doggie.
                        Scout is very smart and she loves to have her belly rubbed.
                        </p>
                        <br />
                        <p>Breed:  Bernese Mountain Dog</p>
                        <br />
                        <p>Weight: 80 lbs</p>
                    </Col>
                </Row>
                <h1 className="text-center">Cockapoo Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Lettie} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Lettie</h1>
                        <p>Lettie is an F1 Cockapoo. Her full name is Lettie Lue the Cockapoo.
                        She loves to be outside playing and running in the yard.
                        She has a beautiful Blue Merle coat which gives her the fancy coloring.
                        Lettie is a fantastic mother who keeps her liter box clean and tidy.
                        She will line her puppies up in a row after feeding them before she takes a break.
                        </p>
                        <br />
                        <p>Breed:  F1 Cockapoo</p>
                        <br />
                        <p>Weight: 18 lbs </p>
                    </Col>
                </Row>
                <h1 className="text-center">Goldendoodle Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src="https://via.placeholder.com/400x400" alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Oakley</h1>
                        <p>Oakley is an F1b Goldendoodle.
                        Annie Oakley is the pack leader at our house.
                        She has been a fantastic mother to her babies,
                        and she teaches the other dogs as she goes.
                        Oakley was one of our first mommas @SoffeDoodles,
                        and although we don't have favorites, she is at the top of the list.
                        </p>
                        <br />
                        <p>Breed:  F1b Goldendoodle</p>
                        <br />
                        <p>Weight: 50 lbs </p>
                    </Col>
                </Row>
                <h1 className="text-center">Sires and Studs</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Cooper} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Cooper</h1>
                        <p>Cooper is an F1b Cockapoo.
                        His full name is Marshall Jed Cooper, he in not large, but he is in charge.
                        With five girls to look after he is always barking out orders to the ladies.
                        Cooper is also available for stud. Call Kathleen at 801-580-0699 to arrange a meeting, or get more information.
                        </p>
                        <br />
                        <p>Breed:  CKC Cockapoo</p>
                        <br />
                        <p>Weight: 7 lbs </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Rex} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Rex</h1>
                        <p>T-Rex is a Mini Red Goldendoodle with a white chin and chest.
                        He is a fantastic dog that loves to play fetch, run the yard, and keep up with the girls.
                        He lets Cooper be in charge, but knows that one day he will have to keep all the girls safe.
                        Rex is currently available for stud service, contact Kathleen at 801-580-0699 to arrange a meeting or get more information.
                        </p>
                        <br />
                        <p>Breed:  Mini Goldendoodle</p>
                        <br />
                        <p>Weight: 20 lbs </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Ollie} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Ollie</h1>
                        <p>Oliver Twist is an AKC Toy Poodle who is soon to be added to the SoffeDoodles stud line.
                        He is a little too young now, but his tri colors of tan, black and white, along with his small size will make him popular when he comes of age.
                        Ollie is a spunky little guy with a big heart.
                        </p>
                        <br />
                        <p>Breed:  AKC Toy Poodle</p>
                        <br />
                        <p>Weight: 5 lbs </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DogInfo;