import React from 'react'
import "../Css/navbar.css";
import { Navbar,Container, Nav, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Video from "../img/Career.mp4"
function NavbarSection() {
    return (
    <div className='NavBar'>
      <Navbar  className="navbackground" varient="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll"/>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '150px' }}
        navbarScroll
      >
        {/* <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
    </Nav.Link>*/}
      </Nav> 
      <Button className='LoginButton' variant="light" size="sm">Login/Register</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarSection