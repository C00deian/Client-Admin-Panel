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




export default function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/logout" element={<Logout />} />

        {/* Use "element" prop for rendering components */}
        <Route path="/login" element={<Login />} />

        {/* Use "element" prop for rendering components */}
        <Route path="/details" element={<ClientDetail />} />
        {/* <Route path="/update/:id" element={<Protected><CLientUpdate /></Protected>} /> */}
        <Route path="/search" element={<ClientSearch />} />
        <Route path="/create" element={<CreateClient />} />
        <Route path="/list" element={<ClientList />} />

        {/* Use "element" prop for rendering components */}
        <Route path="/" element={<Home />} />

         {/* Other routes */}
         <Route path="/update/:id" element={<ClientUpdate/>} />
                {/* Define other routes here */}
            
      </Routes>
      
               
    </Router>
  </div>
  )
}
