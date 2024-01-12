import React, { useEffect, useState } from 'react';
import NavBarManu from './Navbar/NavBarManu';
import { BASEURL } from './constent';
import { useParams } from 'react-router-dom';


const ClientUpdate = () => {

  const params = useParams();

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
    message: '',
Number : ""

  });


  useEffect(() => {

    getClientDetails();
  }, [])
  

// Get a single Client Details and Update it. 
  const getClientDetails = async () => {
    let result = await fetch(BASEURL+`Clients/${params.id}`);
    result = await result.json()
// console.warn(result)
    setFormData(result);

  }



  
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const update = async () => {

    await fetch(BASEURL + `Clients/update/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',

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
        alert('Client Detail has been updated');

      }).catch((error) => {
        console.error('Error:', error);
        alert('Error occurred while updating Client Detail : ' + error.message);
      });
  };

  return (
    <div>
      <NavBarManu />
      <div className='Main-Section'>
        <h2>Update Client</h2>
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
              type="number"
              name="mobileNo"
              onChange={handleChange}
              value={formData.mobileNo}
              placeholder="Client contact"
            />
            <input

              type="text"
              name="expiary"
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
              <div className="box2">
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
                <div className="type">
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
                    <option value="CAC">Civil Application in CRA</option>
                    <option value="CAF">Civil Application in FA</option>
                    <option value="CAM">Civil Application in FCA</option>
                    <option value="CAFM">Civil Application In FEMA</option>
                    <option value="CAY">Civil Application in FERA</option>
                    <option value="CAL">Civil Application in LPA</option>
                    <option value="CAI">Civil Application in PIL</option>
                    <option value="CAS">Civil Application in SA</option>
                    <option value="CAW">Civil Application in WP</option>
                    <option value="CAR">Civil Appln. in ARA</option>
                    <option value="C.REF">Civil References</option>
                    <option value="CRA">Civil Revision Application</option>
                    <option value="SMCPC">Civil Suo Motu Contempt Petition</option>
                    <option value="WP">Civil Writ Petition</option>
                    <option value="COMAO">Commercial AO</option>
                    <option value="COARA">Commercial Arbitration Appeal</option>
                    <option value="COARP">Commercial Arbitration Petition</option>
                    <option value="CCAPL">Commercial Contempt Appeal</option>
                    <option value="COMCP">Commercial Contempt Petition</option>
                    <option value="COMFA">Commercial FA</option>
                    <option value="CP">Cont. Petition</option>
                    <option value="CAPL">Contempt Appeal</option>
                    <option value="COXOB">Cross Objection In Commercial FA/ARA/CO/ARP/CP/CA</option>
                    <option value="XOB">Cross Objection Stamp</option>
                    <option value="FCA">Family Court Appeal</option>
                    <option value="FEMA">FEMA Appeal</option>
                    <option value="FERA">FERA Appeal</option>
                    <option value="FA">First Appeal</option>
                    <option value="IA">INTERIM APPLICATION</option>
                    <option value="LPA">Letter Patent Appeal</option>
                    <option value="MPA">Marriage Petition (A)</option>
                    <option value="MCA">Misc.Civil Application</option>
                    <option value="PIL">Public Interest Litigation</option>
                    <option value="RC">Rejected Case</option>
                    <option value="RPF">Review Pent. in FA</option>
                    <option value="RAP">Review Petition in ARA</option>
                    <option value="COMRP">Review Petition In Commercial FA/ARA/AO/ARP/CP/CA</option>
                    <option value="RPFM">Review Petition In FEMA Appeal</option>
                    <option value="RPV">Review Petition in MCA</option>
                    <option value="RPI">Review Petition In PIL</option>
                    <option value="RPA">Review Petn. in AO</option>
                    <option value="RPR">Review Petn. in ARP</option>
                    <option value="RPT">Review Petn. in CAPL</option>
                    <option value="RPN">Review Petn. in CP</option>
                    <option value="RPC">Review Petn. in CRA</option>
                    <option value="RPM">Review Petn. in FCA</option>
                    <option value="RPL">Review Petn. in LPA</option>
                    <option value="RPS">Review Petn. in SA</option>
                    <option value="RPW">Review Petn. in WP</option>
                    <option value="SA">Second Appeal</option>
                    <option value="SMP">Suo Moto Petition</option>
                    <option value="SMWP">Suo Motu Writ Petition</option>
                    <option value="SMPIL">Suo Motuo PIL</option>
                    <option value="TXA">Tax Appeal</option>
                    <option value="XFER">Transfer Case</option>

                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="year">
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
              </div>
            </div>

          </div>
          <div className="form-row">
            <button onClick={update}>Update</button>

          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default ClientUpdate;
