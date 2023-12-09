import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faList, faPlus,  faUser,  faLock, faHammer,  } from '@fortawesome/free-solid-svg-icons';

const MyNavbar = () => {


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
          <Nav.Link as={Link} to="https://www.bombayhighcourt.nic.in/index.php#">
            <FontAwesomeIcon icon={faHammer} /> BHC
          </Nav.Link>
        
          <Nav.Link as={Link} to="/signup">
            <FontAwesomeIcon icon={faUser} />Registration
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <FontAwesomeIcon icon={faLock} /> Signin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
