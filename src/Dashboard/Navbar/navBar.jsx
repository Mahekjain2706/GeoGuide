import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../../CarasoulImages/logo.png';
// import Home from '../Dashboard/Home/Home';
// import Graph from '../Dashboard/Graphs/graph';
// import Physical from '../Dashboard/Contriute/Physical/physical';
// import Financial from '../Dashboard/Contriute/financial/financial';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="bg-body-secondary" expand="lg" bg="dark" data-bs-theme="dark" style={{ marginBottom: '10px', height: '70px' }}>
        <Container fluid>
          <Image
            src={logo}
            alt="Company Logo"
            rounded
            width={60}
            height={60}
          />
          <Navbar.Brand href='/'>ResQMap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" bg="dark" data-bs-theme="dark" />
          <Navbar.Collapse id="navbarScroll" bg="dark" data-bs-theme="dark">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              bg="dark" data-bs-theme="dark"
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/stats'>Statistics</Nav.Link>
              <NavDropdown title="Contribute" id="navbarScrollingDropdown">
                <NavDropdown.Item href='/physical'>Physical Help</NavDropdown.Item>
                <NavDropdown.Item href="/financial">
                  Financial Help
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/support">
                  Support
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

