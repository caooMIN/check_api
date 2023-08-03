import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div><Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand >Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/" >Home</Nav.Link>
        <Nav.Link as={Link} to="/about" >About</Nav.Link>
        <Nav.Link as={Link} to="/user" >User</Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Navigation