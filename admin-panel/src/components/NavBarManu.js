import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const MyNavbar = () => {
  const isLoggedIn = localStorage.getItem('login');

  return (

    
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className='navbar-brand'>
      <Link  to="/">
            <FontAwesomeIcon icon={faUserCircle} /> Admin Panel
          </Link>
       </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbarr">
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            <FontAwesomeIcon icon={faList} /> List
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            <FontAwesomeIcon icon={faPlus} /> Create
          </Nav.Link>
          <Nav.Link as={Link} to="/search">
            <FontAwesomeIcon icon={faSearch} /> Search
          </Nav.Link>
          <Nav.Link as={Link} to={isLoggedIn ? '/logout' : '/login'}>
            
            <FontAwesomeIcon icon={faUser} /> {isLoggedIn ? 'Logout' : 'Login'}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
