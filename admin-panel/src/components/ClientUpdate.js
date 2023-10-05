import React, { useState } from 'react';
import NavBarManu from './NavBarManu';
import { BASEURL } from './constent';
import { useParams } from 'react-router-dom';


const ClientUpdate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [expiary, setExpiary] = useState(new Date().toDateString());
    const [message, setMessage] = useState('');
    const params = useParams()
    const update = async () => {

        await fetch(`${BASEURL}update/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
            },
            body: JSON.stringify({
                name,
                email,
                contact,
                expiary,
                message,
            }),
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

                setName('');
                setEmail('');
                setContact('');
                setExpiary(new Date().toDateString());
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error occurred while adding restaurant: ' + error.message);
            });
    };

    return (
        <div>
            <NavBarManu />
            <div className="Main-Section">
                <h2>Update Client Detail</h2>
                <div className="form-container">
                    <div className="form-row">
                        <input
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            value={name}
                            placeholder="Client Name"
                        />
                        <input
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            value={email}
                            placeholder="Client Email"
                        />
                    </div>
                    <div className="form-row">
                        <input
                            onChange={(event) => {
                                setContact(event.target.value);
                            }}
                            value={contact}
                            placeholder="Client contact"
                        />
                        <input
                            type="date"
                            onChange={(event) => {
                                setExpiary(event.target.value);
                            }}
                            placeholder="Client expiary"
                            value={expiary}
                        />
                    </div>
                    <div className="form-row">
                        <textarea
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                            value={message}
                            placeholder="Client message"
                        />
                    </div>
                    <div className="form-row"></div>
                    <div className="form-row">
                        <button onClick={update}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientUpdate;
