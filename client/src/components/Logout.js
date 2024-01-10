import React from 'react';
import {
   Navigate
} from 'react-router-dom'
const Logout = () => {
    const auth = localStorage.clear('admin');
    if(auth){
        return <Navigate to="signup" />
    }

};

export default Logout;