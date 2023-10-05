import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from "./components/Home"
// import CLientUpdate from "./components/CLientUpdate";
import CreateClient from "./components/CreateClient";
import ClientDetail from "./components/ClientDetail";
import ClientSearch from "./components/ClientSearch";
import ClientList from "./components/ClientList";
import Login from './components/Login'
import Logout from './components/Logout'
import ClientUpdate from './components/ClientUpdate';
// import Protected from './components/Protected'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



// Define the Protected component to handle authentication logic
function Protected({ children }) {
  // Add your authentication logic here
  // For example, you can check if the user is authenticated, and if not, redirect to the login page
  // For simplicity, we'll just render the children directly
  return children;
}


export default function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/logout" element={<Logout />} />

        {/* Use "element" prop for rendering components */}
        <Route path="/login" element={<Login />} />

        {/* Use "element" prop for rendering components */}
        <Route path="/details" element={<Protected><ClientDetail /></Protected>} />
        {/* <Route path="/update/:id" element={<Protected><CLientUpdate /></Protected>} /> */}
        <Route path="/search" element={<Protected><ClientSearch /></Protected>} />
        <Route path="/create" element={<Protected><CreateClient /></Protected>} />
        <Route path="/list" element={<Protected><ClientList /></Protected>} />

        {/* Use "element" prop for rendering components */}
        <Route path="/" element={<Protected><Home /></Protected>} />

         {/* Other routes */}
         <Route path="/update/:id" element={<ClientUpdate/>} />
                {/* Define other routes here */}
            
      </Routes>
      
               
    </Router>
  </div>
  )
}
