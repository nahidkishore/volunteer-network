import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resource/logos/Group 1329.png';
import './Header.css';



const Header = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  return (
    <div>
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><NavLink to="/"><img width="20%" src={logo} alt=""/></NavLink>  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
      <Nav.Link href="#home"><NavLink to="/home">Home</NavLink></Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
      <Nav.Link href="#home"><NavLink to="/events">Events</NavLink></Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Nav.Link ><Button variant="success"><NavLink to="/register/:eventKey">Events</NavLink></Button></Nav.Link>
      <Nav.Link href="#link"><Button variant="dark"><NavLink to="/admin">Admin</NavLink></Button></Nav.Link>
      <Nav.Link href="#">{loggedInUser.name}</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default Header;