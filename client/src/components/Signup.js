import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import NavBarManu from './Navbar/NavBarManu';
import { BASEURL } from './constent';
import toast, { Toaster } from 'react-hot-toast';
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

  useEffect(() => {
    const auth = localStorage.getItem('admin');
    if (auth) {
      navigate('/');
    }
  }, [])


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
        toast.error(data.error);
      } else if (res.status === 401) {
        toast.error(data.error || 'Email Already Exists');


      } else if (res.status === 422) {
        toast.error(data.error || 'Password not matched');

      }
      else if (res.status === 200) {

        toast.success(data.message || " Registered Successfully");

        //Store Data In A lcal Storage 
        localStorage.setItem('admin', JSON.stringify(data))
        navigate('/');
      }
    } catch (error) {

      toast.error('Somthing went Wrong from server!', error);
      window.alert('Somthing went Wrong from server!');
    }
  };



  return (
    <div>
      <NavBarManu />
      <Toaster />
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
