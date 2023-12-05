import React, { useState } from 'react';
import NavBarManu from './NavBarManu';
import { BASEURL } from './constent';

import { validateEmail, validateMobileNumber, validateName, validateDate } from '../components/Form_Validator';

const CreateClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    expiary: '',
    selectedOption1: '',
    selectedOption2: '',
    selectedOption3: '',
    selectedOption4: '',
    selectedOption5: '',
    Number: '',
    message: '',
  });


  //FORM VALIDATOR
  const validateForm = () => {
    const isEmailValid = validateEmail(formData.email);
    const isMobileValid = validateMobileNumber(formData.mobileNo);
    const isNameValid = validateName(formData.name);
    const isDateValid = validateDate(formData.expiary);

    if (!isEmailValid) {
      alert('Invalid email address');
      return false;
    }

    if (!isMobileValid) {
      alert('Invalid mobile number');
      return false;
    }

    if (!isNameValid) {
      alert('Invalid name');
      return false;
    }

    if (!isDateValid) {
      alert('Invalid date formate');
      return false;
    }

    return true;
  };



  // Function to format the "yyyymmdd" date to "MM-DD-YYYY"


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const create = () => {

    if (!validateForm()) {
      return;

    }

    fetch(BASEURL + 'Clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok. Status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('Client has been added');

        //when Data has been Store to DB  The Field of Form  will be blanked automatically.
        setFormData({
          name: '',
          email: '',
          mobileNo: '',
          expiary: '',
          selectedOption1: '',
          selectedOption2: '',
          selectedOption3: '',
          selectedOption4: '',
          selectedOption5: '',
          Number: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error occurred while adding restaurant: ' + error.message);
      });
  };


  return (
    <div>
      <NavBarManu />
      <div className='Main-Section'>
        <h2>Create Client</h2>
        <div className="form-container">
          <div className="form-row">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Client Name"
            />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Client Email"
            />
          </div>
          <div className="form-row">

            <input

              maxlength="10"
              minLength='10'
              type="text"
              name="mobileNo"
              onChange={handleChange}
              value={formData.mobileNo}
              placeholder="Client contact"
            />
            <input

              type="text"
              name="expiary"
              maxlength="10"
              value={formData.expiary}
              onChange={handleChange}
              placeholder="Client expiary"

            />
            <div className='formate'>DD/MM/YYYY</div>
          </div>
          <div className="form-row">
            <textarea

              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Client message"
            />
          </div>
          <div className="form-row">

            <div className="custom-select">
              {/* ... (Your select elements) ... */}
              <div className="box1">
                <div className="bench">
                  <label >Bench :</label>
                  <select
                    name='selectedOption1'
                    id="selectOption1"
                    value={formData.selectedOption1}
                    onChange={handleChange}
                  >
                    <option value="">Select Bench</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Goa">Goa</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="side">
                  <label >Side :</label>
                  <select
                    name='selectedOption2'
                    id="selectOption1"
                    value={formData.selectedOption2}
                    onChange={handleChange}
                  >
                    <option value="">Side</option>
                    <option value="Civil">Civil</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Original">Original</option>

                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="register">
                  <label >Stamp/Regn :</label>
                  <select
                    name='selectedOption3'
                    id="selectOption3"
                    value={formData.selectedOption3}
                    onChange={handleChange}
                  >
                    <option value="">Stamp/Regn</option>
                    <option value="Register">Register</option>
                    <option value="Stamp">Stamp</option>


                    {/* Add more options as needed */}

                  </select>
                </div>
              </div>
              <div className="box1">
                <div className="bench">
                  <label >Type :</label>
                  <select
                    name='selectedOption4'
                    id="selectOption4"
                    value={formData.selectedOption4}
                    onChange={handleChange}

                  >
                    <option value="AO">Appeal from Order</option>
                    <option value="ARA">Arbitration Appeal</option>
                    <option value="ARP">Arbitration Petition</option>
                    <option value="CAO">CA in Others(MCA/TXA/CA)</option>
                    <option value="CAP">Civil Appl. in ARP</option>
                    <option value="CA">Civil Application</option>
                    <option value="CAA">Civil Application in AO</option>
                    <option value="CAE">Civil Application in C.REF</option>
                    <option value="CAT">Civil Application in CAPL</option>
                    <option value="CAN">Civil Application in CP</option>
                    <option value="Civil Application in CRA">Civil Application in CRA</option>
                    <option value="Civil Application in FA">Civil Application in FA</option>
                    <option value="Civil Application in FCA">Civil Application in FCA</option>
                    <option value="Civil Application In FEMA">Civil Application In FEMA</option>
                    <option value="Civil Application in FERA">Civil Application in FERA</option>
                    <option value="Civil Application in LPA">Civil Application in LPA</option>
                    <option value="Civil Application in PIL">Civil Application in PIL</option>
                    <option value="Civil Application in SA">Civil Application in SA</option>
                    <option value="Civil Application in WP">Civil Application in WP</option>
                    <option value="Civil Appln. in ARA">Civil Appln. in ARA</option>
                    <option value="Civil References">Civil References</option>
                    <option value="Civil Revision Application">Civil Revision Application</option>
                    <option value="Civil Suo Motu Contempt Petition">Civil Suo Motu Contempt Petition</option>
                    <option value="Civil Writ Petition">Civil Writ Petition</option>
                    <option value="Commercial AO">Commercial AO</option>
                    <option value="Commercial Arbitration Appeal">Commercial Arbitration Appeal</option>
                    <option value="Commercial Arbitration Petition">Commercial Arbitration Petition</option>
                    <option value="Commercial Contempt Appeal">Commercial Contempt Appeal</option>
                    <option value="Commercial Contempt Petition">Commercial Contempt Petition</option>
                    <option value="Commercial FA">Commercial FA</option>
                    <option value="Cont. Petition">Cont. Petition</option>
                    <option value="Contempt Appeal">Contempt Appeal</option>
                    <option value="Cross Objection In Commercial FA/ARA/CO/ARP/CP/CA">Cross Objection In Commercial FA/ARA/CO/ARP/CP/CA</option>
                    <option value="Cross Objection Stamp">Cross Objection Stamp</option>
                    <option value="Family Court Appeal">Family Court Appeal</option>
                    <option value="FEMA Appeal">FEMA Appeal</option>
                    <option value="FERA Appeal">FERA Appeal</option>
                    <option value="First Appeal">First Appeal</option>
                    <option value="INTERIM APPLICATION">INTERIM APPLICATION</option>
                    <option value="Letter Patent Appeal">Letter Patent Appeal</option>
                    <option value="Marriage Petition (A)">Marriage Petition (A)</option>
                    <option value="Misc.Civil Application">Misc.Civil Application</option>
                    <option value="Public Interest Litigation">Public Interest Litigation</option>
                    <option value="Rejected Case">Rejected Case</option>
                    <option value="Review Pent. in FA">Review Pent. in FA</option>
                    <option value="Review Petition in ARA">Review Petition in ARA</option>
                    <option value="Review Petition In Commercial FA/ARA/AO/ARP/CP/CA">Review Petition In Commercial FA/ARA/AO/ARP/CP/CA</option>
                    <option value="Review Petition In FEMA Appeal">Review Petition In FEMA Appeal</option>
                    <option value="Review Petition in MCA">Review Petition in MCA</option>
                    <option value="Review Petition In PIL">Review Petition In PIL</option>
                    <option value="Review Petn. in AO">Review Petn. in AO</option>
                    <option value="Review Petn. in ARP">Review Petn. in ARP</option>
                    <option value="Review Petn. in CAPL">Review Petn. in CAPL</option>
                    <option value="Review Petn. in CP">Review Petn. in CP</option>
                    <option value="Review Petn. in CRA">Review Petn. in CRA</option>
                    <option value="Review Petn. in FCA">Review Petn. in FCA</option>
                    <option value="Review Petn. in LPA">Review Petn. in LPA</option>
                    <option value="Review Petn. in SA">Review Petn. in SA</option>
                    <option value="Review Petn. in WP">Review Petn. in WP</option>
                    <option value="Second Appeal">Second Appeal</option>
                    <option value="Suo Moto Petition">Suo Moto Petition</option>
                    <option value="Suo Motu Writ Petition">Suo Motu Writ Petition</option>
                    <option value="Suo Motuo PIL">Suo Motuo PIL</option>
                    <option value="Tax Appeal">Tax Appeal</option>
                    <option value="Transfer Case">Transfer Case</option>

                    {/* Add more options as needed */}
                  </select>


                </div>
               
                <div className="side">
                  <label >Year :</label>
                  <select
                    name='selectedOption5'
                    id="selectOption5"
                    value={formData.selectedOption5}
                    onChange={handleChange}
                  >
                    <option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option>

                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="register">
                  <label className='NO' > Case No :</label>

                  <div className='NUMBER'>
                  <input
              
                    type="text"
                    name="Number"
                    onChange={handleChange}
                    value={formData.Number}
                    placeholder="NO."
                
                  />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="form-row">
            <button onClick={create}>Add Client</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
