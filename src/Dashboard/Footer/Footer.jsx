import React from 'react';
import {Container, Row,Col,Stack,Nav,NavLink} from "react-bootstrap";
import logo from '../../CarasoulImages/logo.png';
import Image from 'react-bootstrap/Image';

const Footer = () => {
    return (
        <div>
            <footer style={{backgroundColor: '#343a40', height: '30vh', color: 'white'}}>
                <Container fluid>
                <Row className='p-4'>
                    <Col className='mx-5'>
                        <Stack>
                            <Image
                                src={logo}
                                alt = "Company Logo"
                                rounded
                                width={170}
                                height={150}
                            />
                            <h2> ResQMap </h2>
                            <p> Disaster Relief and Reponse </p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className='flex-column fs-5'>
                            Useful Links 
                            <NavLink href="/" className='text-white'>Home</NavLink>
                            <NavLink href="/stats" className='text-white'>Graph</NavLink>
                            <NavLink href="/financial" className='text-white'>Financial Help</NavLink>
                            <NavLink href="/physical" className='text-white'>Physical Help</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Contact Us!</h4>
                        <p>abc@abcemail.com</p>
                        <p>Phone: +(91) 1234 456 789 </p>
                        <NavLink href="/support" className='text-white'>Support</NavLink>
                    </Col>
                </Row>            
            </Container>
            </footer>
        </div>
    );
}

export default Footer;
