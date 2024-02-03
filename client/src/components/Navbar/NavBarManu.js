import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as HamburgerIcon } from '../../components/assets/icons/hamburger.svg';
import { ReactComponent as CrossIcon } from '../../components/assets/icons/close-icon.svg';
import './navbar.css';

const MyNavbar = () => {
  const auth = localStorage.getItem('admin');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const Logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/" className="title">
        NAVBAR
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CrossIcon style={{ fill: "white" }} /> : <HamburgerIcon style={{ fill: "white" }} />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {auth ? (
          <>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className='Icon'/> 
                
                Home
              </Link>
            </li>
            <li>
              <Link to="/create">
                <FontAwesomeIcon icon={faUserPlus}  className='Icon' />
                Create 
              </Link>
            </li>
            <li>
              <Link to="/list">
                <FontAwesomeIcon icon={faUsers}  className='Icon'/>
                User 
              </Link>
            </li>
            <li >
              <Link to="/login" onClick={Logout}>
                <FontAwesomeIcon icon={faSignOutAlt}  className='Icon'/>
                Logout <li className='username'>{JSON.parse(auth).username}</li>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">
                <FontAwesomeIcon icon={faUser}  className='Icon'/>
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} className='Icon' />
                Signin
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default MyNavbar;
