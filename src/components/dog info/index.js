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
import Oakley from './images/Oakley.jpg';
import Lulu from './images/Lulu.jpg';
import Della from './images/Della.jpg';

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
                        <h4>
                        Scout loves everyone. She loves to cuddle and do the Berenese lean. 
                        She will want to be touching you when close. Whether shes in the yard playing or
                        by my feet while I answer emails she is content. Scout is a direct import
                        from Europe, with outstanding lineage. We love our Scout!
                        </h4>
                        <h4>Breed: AKC Bernese Mountain Dog</h4>
                        <h4>Weight: 80 lbs</h4>
                    </Col>
                </Row>
                <h1 className="text-center font-1">Cockapoo Dame</h1>
                <Row>
                    <Col lg={'auto'} xs={'auto'}>
                        <img src={Lettie} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Lettie (Retired)</h1>
                        <h3>Lettie is an F1 Cockapoo. Her full name is Lettie Lue the Cockapoo.
                        She loves to be outside playing and running in the yard.
                        She has a beautiful Blue Merle coat which gives her the fancy coloring.
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
                        <img src={Oakley} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Oakley (Retired)</h1>
                        <h3>Oakley is an F1b Goldendoodle.
                        Annie Oakley is the pack leader at our house.
                        She has been a fantastic mother to her babies,
                        and she teaches the other dogs as she goes.
                        Oakley was one of our first mommas @SoffeDoodles,
                        and although we don't have favorites, she is at the top of the list.
                        </h3>
                        <br />
                        <h3>Breed: F1b Goldendoodle</h3>
                        <br />
                        <h3>Weight: 50 lbs </h3>
                    </Col>
                </Row>
                <h1 className="text-center font-1"> Mini Bernadoodle Dames</h1>
                <Row>
                <Col lg={'auto'} xs={'auto'}>
                        <img src={Lulu} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Lulu</h1>
                        <h3>Lulu is a Mini Bernadoodle.
                        She is a daughter of Scout and sister to Della.
                        We picked Lulu for our standard and mini Bernadoodle program because
                        of her lineage, temperament and size.
                        She has the perfect personality to produce calm, easy going, EXTRA lovable
                        Bernadoodles that think they are a lap dog. One of the reasons we chose her 
                        other then her calm temperament and long lineage of health was because of her
                        personality. She has the perfect Bernadoodle personality bouncy, fun loving goofball
                        that wants to please.
                        </h3>
                        <br />
                        <h3>Breed: Mini Bernadoodle </h3>
                        <br />
                        <h3>Weight: 30 lbs </h3>
                    </Col>
                </Row>
                <Row>
                <Col lg={'auto'} xs={'auto'}>
                        <img src={Della} alt='pics of dogs' className="mt-5 mb-5 img-responive"></img>
                    </Col>
                    <Col className="font-2">
                        <h1 className="mt-5" style={{ textAlign: "left" }}>Della</h1>
                        <h3>Della is a Mini Bernadoodle.
                        She is a daughter of Scout and sister to Lulu.
                        We picked Della for our mini Bernadoodle program because of her lineage,
                        confirmation and temperament. She comes from Scout who has generations of health
                        tested parents and from a line of top quality European Bernese.
                        Della is fun, loving, cuddly, sweet and loyal. Della loves everyone. She loves
                        to sit right next to your feet. I call her my shadow. Anywhere I go she is right 
                        there. She does the Berenese lean. If you are near she will want to be touching you.
                        </h3>
                        <br />
                        <h3>Breed: Mini Bernadoodle </h3>
                        <br />
                        <h3>Weight: 30 lbs </h3>
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