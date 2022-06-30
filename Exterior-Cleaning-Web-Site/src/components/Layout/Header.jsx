import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Outlet } from 'react-router-dom';



const Header = () => {
  return (
    <Container className='d-flex'>
        <Navbar fixed='top' expand='lg' bg='primary' variant='dark'>
            <Navbar.Brand href='/' className='ms-4'>Exterior Cleaning of SC</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end me-4'>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='about'>About</Nav.Link>
                    <Nav.Link href='payments'>Payments</Nav.Link>
                    <Nav.Link href='schedule'>Schedule</Nav.Link>
                    <NavDropdown title='Services' id='basic-nav-dropdown' menuVariant='light' align='end'>
                      <NavDropdown.Item>House</NavDropdown.Item>
                      <NavDropdown.Item>Concrete</NavDropdown.Item>
                      <NavDropdown.Item>Roof</NavDropdown.Item>
                      <NavDropdown.Item>Gutters</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
       {/* <Outlet />  */}
    </Container>
  )
}

export default Header;