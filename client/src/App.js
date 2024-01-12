import './App.css';
import Home from "./components/Home"
import CreateClient from "./components/CreateClient";
import ClientList from "./components/ClientList";
import ClientUpdate from './components/ClientUpdate';
import { Signin } from './components/Signin';
import BSB from './components/BSB';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';


export default function App() {
  


  return (

    <div className="App">

      <Router>
        <Routes>
<Route element={<PrivateComponent/>}>
          {/* Use "element" prop for rendering components */}
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<ClientUpdate />} />
          <Route path="/BSB" element={<BSB />} />
          <Route path="/create" element={<CreateClient />} />
          <Route path="/list" element={<ClientList />} />
         
          {/* Use "element" prop for rendering components */}
          {/* <Route path="/" element={<Home />} /> */}
         
        

</Route>
          {/* Other routes */}
          
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* Define other routes here */}

        </Routes>

      </Router>
    </div>
  )
}