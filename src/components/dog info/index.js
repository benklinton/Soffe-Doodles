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
        <header className='masthead bg-image-di'>
            <Container className='h-100'>
                <Row className='h-100 align-items-center'>
                    <div className='col-lg-12'>
                        <h1 className='mb-4 header-font' style={{textAlign: 'center'}}> Sires and Dames</h1>
                    </div>

                </Row>
            </Container>
        </header>
            <Container>
                <h1 className="mt-5 text-center font-1">Poodle Dames</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Fern} alt='pics of dogs' className=" mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left", fontWeight:"bold" }}>Fern</h1>
                        <h3>Fern is an AKC Standard Poodle who loves to retrieve her yard toys.
                        She has a lot of energy, extremely soft fur and is very loving around the family and friends.
                        She adores the water and would play out in the yard all day.</h3>
                        <br />
                        <h3>Breed: AKC Standard Poodle</h3>
                        <br />
                        <h3>Weight: 45 lbs</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Willow} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Willow</h1>
                        <h4>Willow is an AKC Royal Sable Poodle.
                        Her full name is Willomena Fancy Prance because she is very dainty and loves to prance around the yard like a beauty queen.
                        She has a gentle bite and is very affectionate with children and other dogs.
                        </h4>
                        <br />
                        <h4>Breed:  AKC Royal Poodle</h4>
                        <br />
                        <h4>Weight: 55 lbs</h4>
                    </Col>
                </Row>
                <h1 className="text-center font-1">Bernese Mountain Dog Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Scout} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className='font-2'>
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Scout</h1>
                        <h4>Scout is an AKC Bernese Mountain Dog.
                        She loves to be outside, and playing in the snow.
                        Scout has a short nose with a blocky head that makes her one good looking doggie.
                        Scout is very smart and she loves to have her belly rubbed.
                        </h4>
                        <br />
                        <h4>Breed:  Bernese Mountain Dog</h4>
                        <br />
                        <h4>Weight: 80 lbs</h4>
                    </Col>
                </Row>
                <h1 className="text-center font-1">Cockapoo Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Lettie} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Lettie</h1>
                        <h3>Lettie is an F1 Cockapoo. Her full name is Lettie Lue the Cockapoo.
                        She loves to be outside playing and running in the yard.
                        She has a beautiful Blue Merle coat which gives her the fancy coloring.
                        Lettie is a fantastic mother who keeps her liter box clean and tidy.
                        She will line her puppies up in a row after feeding them before she takes a break.
                        </h3>
                        <br />
                        <h3>Breed:  F1 Cockapoo</h3>
                        <br />
                        <h3>Weight: 18 lbs </h3>
                    </Col>
                </Row>
                <h1 className="text-center font-1">Goldendoodle Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src="https://via.placeholder.com/400x400?text=Coming Soon" alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Oakley</h1>
                        <h3>Oakley is an F1b Goldendoodle.
                        Annie Oakley is the pack leader at our house.
                        She has been a fantastic mother to her babies,
                        and she teaches the other dogs as she goes.
                        Oakley was one of our first mommas @SoffeDoodles,
                        and although we don't have favorites, she is at the top of the list.
                        </h3>
                        <br />
                        <h3>Breed:  F1b Goldendoodle</h3>
                        <br />
                        <h3>Weight: 50 lbs </h3>
                    </Col>
                </Row>
                <h1 className="text-center font-1">Sires and Studs</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Cooper} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Cooper</h1>
                        <h3>Cooper is an F1b Cockapoo.
                        His full name is Marshall Jed Cooper, he in not large, but he is in charge.
                        With five girls to look after he is always barking out orders to the ladies.
                        Cooper is also available for stud. Call Kathleen at 801-580-0699 to arrange a meeting, or get more information.
                        </h3>
                        <br />
                        <h3>Breed:  CKC Cockapoo</h3>
                        <br />
                        <h3>Weight: 7 lbs </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Rex} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Rex</h1>
                        <h3>T-Rex is a Mini Red Goldendoodle with a white chin and chest.
                        He is a fantastic dog that loves to play fetch, run the yard, and keep up with the girls.
                        He lets Cooper be in charge, but knows that one day he will have to keep all the girls safe.
                        Rex is currently available for stud service, contact Kathleen at 801-580-0699 to arrange a meeting or get more information.
                        </h3>
                        <br />
                        <h3>Breed:  Mini Goldendoodle</h3>
                        <br />
                        <h3>Weight: 20 lbs </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Ollie} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Ollie</h1>
                        <h3>Oliver Twist is an AKC Toy Poodle who is soon to be added to the SoffeDoodles stud line.
                        He is a little too young now, but his tri colors of tan, black and white, along with his small size will make him popular when he comes of age.
                        Ollie is a spunky little guy with a big heart.
                        </h3>
                        <br />
                        <h3>Breed:  AKC Toy Poodle</h3>
                        <br />
                        <h3>Weight: 5 lbs </h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DogInfo;