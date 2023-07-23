import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand ><Link className='text-decoration-none' href={route('index')}>Top n Tech</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <NavLink className='text-decoration-none'><Link href={route('listings.create')} className='text-decoration-none text-black'>Create Listing</Link></NavLink>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
