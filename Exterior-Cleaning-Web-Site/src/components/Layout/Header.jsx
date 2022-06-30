import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const Header = () => {
  return (
    <Container className='d-flex'>
        <Navbar fixed='top' expand='lg' bg='light' variant='light'>
            <Navbar.Brand href='#home' className='ms-4'>Exterior Cleaning of SC</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end me-4'>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  )
}

export default Header;