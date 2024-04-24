import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../../CarasoulImages/1.png';
import second from '../../CarasoulImages/1.jpg';
import third from '../../CarasoulImages/2.jpeg';
import fourth from '../../CarasoulImages/3.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import image1 from '../Home/images/1.jpeg';
import { Footer } from 'flowbite-react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image src={first} fluid />
                    <Carousel.Caption>
                        <h3>Natural Disasters</h3>
                        <p>Relief and Response during Disasters</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={second} fluid />

                    <Carousel.Caption>
                        <h3>WildFires</h3>
                        <p>Rescue from unwanted events</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={third} fluid />

                    <Carousel.Caption>
                        <h3>EarthQuake</h3>
                        <p>
                            PolicyMakers will ensure about Human Mobility.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={fourth} fluid />
                    <Carousel.Caption>
                        <h3>Flood</h3>
                        <p>
                            Help them to Inform before time by weather forecasting.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <br />
            <div className='cards'>
                <Table>
                    <tr>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '2%' }}>
                            <Card style={{ width: '90%' }} className='cardName'>

                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td style={{ paddingBottom: '2%' }}>
                            <Card style={{ width: '90%' }} className='cardName'>

                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Card style={{ width: '90%' }} className='cardName'>

                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card style={{ width: '90%' }} className='cardName'>

                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                </Table>
            </div>
            <br />
            <br />
            <div style={{marginLeft: '3%' , marginRight: '5%'}}>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <br/>
            <br/>
            <div className='form' style={{ width: '50%',marginLeft:'25%'}}>
                <h1><b>Donation Center</b></h1>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Latitute"
                    />
                    <label htmlFor="floatingInputCustom">Latitude</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        placeholder='Longitute'
                    />
                    <label htmlFor="floatingPasswordCustom">Longitude</label>
                </Form.Floating>
            </div>
            <br/>
            <footer style={{backgroundColor: 'grey', height: '30vh'}}>

            </footer>
        </div>
    );
}

export default Home;
