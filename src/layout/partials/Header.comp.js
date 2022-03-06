import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" 
    variant="dark" expand="md">
        <Navbar.Brand>
            <img src={logo} alt="logo" width="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m1-auto">
                <Nav.Link href="/dashborad">Dashboard</Nav.Link>
                <Nav.Link href="/dashborad">Tickets</Nav.Link>
                <Nav.Link href="/dashborad">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
