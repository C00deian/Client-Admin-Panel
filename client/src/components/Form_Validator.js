// FormValidator.js

export const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };


export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateMobileNumber = (mobileNo) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNo);
  };
  

  

export const validateDate = (expiary) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(expiary);
  };
  
 
  