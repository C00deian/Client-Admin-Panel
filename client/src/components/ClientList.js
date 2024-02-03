import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
import { Table, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { BASEURL } from './constent';
import toast, { Toaster } from 'react-hot-toast';
import NavBarManu from './Navbar/NavBarManu';

function ClientList() {


    const [formData, setFormData] = useState();

    // Get All  Client Detail List and Apply  Operations Like Delete And Update. 
    const getAllClientData = () => {
        fetch(BASEURL + 'Clients').then((response) => {
            response.json().then((result) => {
                setFormData(result);
            });
        });
    };



    //Search CLient Data
    const HandleSearch = async (event) => {
        let key = event.target.value;

        if (key) {
            try {
                const result = await fetch(BASEURL + `Clients/search/${key}`);
                const data = await result.json();

                if (data) {
                    setFormData(data); // Wrap the single result in an array
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }


            //again render all the Document  if there is know value in  that keyword
        } else {
            getAllClientData();
        }
    };



    //Send message
    const sendMessage = async (id) => {
        try {
            let result = await fetch(BASEURL + `Clients/sendEmails/${id}`);

            if (result.ok) {
                const data = await result.json();
                console.log('Response from server:', data);
                window.alert('Message sent successfully');
            } else {
                throw new Error(`Failed to send message. Status: ${result.status}`);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            window.alert('Error sending message');
        }
    };




    //Delete Client Data 
    const deleteItem = (id) => {

        const userConfirmation = window.confirm('Are you Sure You want to delete.');
        if (userConfirmation) {
            confirmDelete(id);
        } else {
            window.alert("Delete canceled");
        }


    };

    useEffect(() => {
        getAllClientData()

    }, [])

    const confirmDelete = (id) => {

        fetch(BASEURL + `Clients/${id}`, {
            method: "DELETE",
        }).then((result) => {

            result.json().then((resp) => {

                toast.success('Client Deleted');


                // When Client Deleted.  ReRender The List To See The Rest Client List.
                getAllClientData();
            });
        });
    }




    return (
        <div>
            <NavBarManu />
           
            <h1>Client List</h1>
            <Toaster
                
                position="top-right"
                reverseOrder={false}
            />
            <Form.Control type="text" onChange={HandleSearch} placeholder="Search Client" />

            {formData ? (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Mobile No.</th>
                                <th>Expiary-date</th>
                                <th>Message</th>
                                <th>Case No.</th>
                                <th>Operation</th>
                                <th>Send SMS</th>
                            </tr>
                        </thead>

                        <tbody>


                            {


                                formData.length > 0 ? formData.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobileNo}</td>
                                        <td>{item.expiary}</td>
                                        <td>{item.message}</td>
                                        <td>{item.Number}</td>
                                        <td>
                                            <Link to={`/update/${item._id}`}>
                                                <FontAwesomeIcon icon={faEdit} color="orange" /> Edit
                                            </Link>
                                            <div></div>



                                            <Link onClick={() => deleteItem(item._id)} >
                                                <FontAwesomeIcon icon={faTrash} color="red" cursor="pointer" /> Delete
                                            </Link>

                                        </td>
                                        <td>

                                            <button className='send-btn' onClick={() => sendMessage(item._id)} > Send  </button>

                                        </td>
                                    </tr>
                                )


                                    : <h1 className='list-record'> Record Not Found😞</h1>
                            }

                        </tbody>

                    </Table>
                </div>
            ) : (
                <p>Please Wait...</p>
            )}
        </div>
    );
}

export default ClientList;
