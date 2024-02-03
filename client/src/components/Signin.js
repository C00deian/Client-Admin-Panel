import React, { useState } from 'react';
import NavBarManu from './Navbar/NavBarManu';
import { BASEURL } from './constent';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


export const Signin = () => {

  const navigate = useNavigate();

    const [AdminData, setAdminData] = useState({

        Email: '',
        password: '',
      
      });
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({
          ...AdminData,
          [name]: value,
        });
      };
    
  const SigninAdmin = async (e) => {
    e.preventDefault();

    const URL = BASEURL + 'Clients/admin-login';

    try {
      const response = await axios.post(URL, AdminData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      toast.success('Successfully Login')
      localStorage.setItem('admin', JSON.stringify(data));
      navigate('/');
    

    } catch (error) {

      console.error('An error occurred:', error);
      toast.error('An Unexpected error Occured');

    }
  };
    
    
  
    
      return (
        <div>
          <NavBarManu />
          <div className='Main-Section'>
            <Toaster/>
            <h2>Sign in</h2>
            <div className="form-container">
              <div className="form-row">
            
                <input
                  type="text"
                  name="Email"
                  onChange={handleChange}
                  value={AdminData.Email}
                  placeholder="E-mail"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={AdminData.password}
                  placeholder="Password"
                />
           
              </div>
        
    
           
                <button onClick={SigninAdmin} className='signup-btn'>Sign in</button>
                <br></br>
                                                          <br></br>
           <Link to={'/signup'} > Create an Account</Link>
            
            </div>
          </div>
        </div>
      )
    
}
