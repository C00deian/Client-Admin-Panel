// ... (import statements remain the same)
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faList, faPlus, faUser, faLock, faHammer,  faSignOut, } from '@fortawesome/free-solid-svg-icons';


const MyNavbar = () => {
  const auth = localStorage.getItem('admin');
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='navbar-brand'>
          <Link to="/">
            <FontAwesomeIcon icon={faUserCircle} /> Admin Panel
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navbarr">

            {auth ? (
              <>
                <Nav.Link as={Link} to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Nav.Link>

                <Nav.Link as={Link} to="/create">
                  <FontAwesomeIcon icon={faPlus} /> Create
                </Nav.Link>


                <Nav.Link as={Link} to="/list">
                  <FontAwesomeIcon icon={faList} /> List
                </Nav.Link>


                <Nav.Link as={Link} to="https://www.bombayhighcourt.nic.in/index.php#">
                  <FontAwesomeIcon icon={faHammer} /> BHC
                </Nav.Link>

                
                <Nav.Link onClick={Logout} as={Link} to="/signup">
                  <FontAwesomeIcon icon={faSignOut}  /> Logout  ({JSON.parse(auth).username})
                </Nav.Link>
              </>
            ) : (
              <Nav >
                <Nav.Link as={Link} to="/signup">
                  <FontAwesomeIcon icon={faUser} /> Registration
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon icon={faLock} /> Sign In
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
