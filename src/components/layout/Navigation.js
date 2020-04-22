import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";

const Navigation = () => {
  
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">TEAMWORK</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">SIGNUP</Nav.Link>
          <Nav.Link href="#pricing">LOGIN</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navigation;
