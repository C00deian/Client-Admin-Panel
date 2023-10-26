import React, { useState } from 'react';
import NavBarManu from './NavBarManu';
import { BASEURL } from './constent';
import { Link, useNavigate } from 'react-router-dom'

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

  const res =  await  fetch(BASEURL + 'admin-login', {
          method: 'POST',
          headers: {
    
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(AdminData),
        })
        try {
          const data = await res.json();
          if (res.status === 400) {
            window.alert(data.error || ' Please fill the form properly.');
          } else if (res.status === 401) {
            window.alert(data.error || 'Invalid Login Detail');

          }
          else if (res.status === 404) {
            window.alert(data.error || 'Admin Not Found');

          }  else if (res.status === 201) {
            // Successful login
            // dispatch({ type: 'USER', payload: true });
            window.alert(data.message || 'Login Successful');
            navigate('/');
          } 
        } catch (error) {
          console.error('An error occurred:', error);
          window.alert( 'An error occurred during Login. Please try again later.');
        }
      };
    
    
    
  
    
      return (
        <div>
          <NavBarManu />
          <div className='Main-Section'>
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
                {/* <input
                  type="text"
                  name="cpassword"
                  onChange={handleChange}
                  value={AdminData.cpassword}
                  placeholder="Confirm Password"
                /> */}
              </div>
        
    
              <div className="form-row">
                <button onClick={SigninAdmin}>Sign in</button>
                <br></br>
                                                          <br></br>
           <Link to={'/signup'}> <a>Create an Account</a></Link>
              </div>
            </div>
          </div>
        </div>
      )
    
}
