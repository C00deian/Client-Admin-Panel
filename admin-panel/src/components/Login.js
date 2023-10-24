import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarManu from './NavBarManu';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      // Replace this with your actual authentication endpoint URL.
      const response = await  fetch(("http://localhost:5000/login?q=" + name) ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('login', JSON.stringify(data));
        navigate('/list'); 
        
      // Redirect to the 'list' page after successful login.
      } else if (response.status === 401) {
        alert("Authentication failed. Please check your username and password.");
      } else {
        // Handle other error cases as needed.
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <NavBarManu />

      <div className='Main-Section'>
      <h2>Sign in</h2>
        <input
          type="text"
          placeholder="Enter Name"
          name="user"
          value={name}
          onChange={(event) => setName(event.target.value)}
        /> <br /> <br />
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /> <br /> <br />
        <button onClick={login}>Signin</button>
      </div>
    </div>
  );
}

export default Login;
