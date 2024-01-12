import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import NavBarManu from './Navbar/NavBarManu';
import { BASEURL } from './constent';
function Signup() {

  const navigate = useNavigate();

  const [AdminData, setAdminData] = useState({

    username: '',
    Email: '',
    password: '',
    cpassword: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...AdminData,
      [name]: value,
    });
  };

  useEffect(()=>{
const auth = localStorage.getItem('admin');
if(auth){
  navigate('/');
}
  } ,[]) 


  const SignupAdmin = async (e) => {
    const { username, Email, password, cpassword } = AdminData
    e.preventDefault();
    const res = await fetch(BASEURL + 'Clients/admin-register', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, Email, password, cpassword }),
    })
    try {
      const data = await res.json()
      console.warn(data)
      if (res.status === 400) {
        window.alert(data.error || 'Please fill the form properly.');
      } else if (res.status === 401) {
        window.alert(data.error || 'Email Already Exists');


      } else if (res.status === 422) {
        window.alert(data.error || 'Password not matched');

      }
      else if (res.status === 200) {
     
        window.alert(data.message || " Registered Successfully");

        //Store Data In A lcal Storage 
        localStorage.setItem('admin', JSON.stringify(data))
        navigate('/');
      } else {
        console.error('An error occurred during Registration:', data);
        window.alert(data.error || 'An error occurred during Login. Please try again later.');
      }
    } catch (error) {
      console.error('Somthing went Wrong from server!:', error);
      window.alert('Somthing went Wrong from server!');
    }
  };



  return (
    <div>
      <NavBarManu />
   
      <div className='Main-Section'>

        <h2>Sign up</h2>
        <div className="form-container">
          <div className="form-row">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={AdminData.username}
              placeholder="Username"
            />
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
            <input
              type="text"
              name="cpassword"
              onChange={handleChange}
              value={AdminData.cpassword}
              placeholder="Confirm Password"
            />
          </div>

    
          </div>
          
            <button onClick={SignupAdmin} className='signup-btn'>Signup</button> <br></br>
            <br></br>
            <Link to={'/login'}>Already have an Account</Link>
      
      </div>
    </div>
    
  )
}

export default Signup;
