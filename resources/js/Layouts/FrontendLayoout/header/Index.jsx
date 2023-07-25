import { Link } from '@inertiajs/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fav from "../../../../images/favicon.png"
import "./Style.css"
export default function Navigation({ auth }) {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand ><img src={fav} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

               
                <Nav>

                    <>
                        <Link
                            href={route('login')}
                            className="butn"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="butn"
                        >
                            Register
                        </Link>
                    </>

                </Nav>
            </Container>
        </Navbar>
    );
}
