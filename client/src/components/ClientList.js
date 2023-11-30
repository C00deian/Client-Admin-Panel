import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
import { Table, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { BASEURL } from './constent';
import NavBarManu from './NavBarManu';

function ClientList() {


    const [formData, setFormData] = useState(null);

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

        let key = event.target.value
        if (key) {
            let result = await fetch(BASEURL + `Clients/${key}`)
            result = await result.json()
            if (result) {

                setFormData(result)

            }
        } else {

            getAllClientData();
        }


    }








    const deleteItem = (id) => {
        fetch(BASEURL + `Clients/${id}`, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                alert("Client has been deleted");


                // When Client Deleted.  ReRender The List To See The Rest Client List.
                getAllClientData();
            });
        });
    };

    useEffect(() => {
        getAllClientData()

    }, [])

    return (
        <div>
            <NavBarManu />
            <h1>Client List</h1>
            <Form.Control type="text" onChange={HandleSearch} placeholder="Search Client" />

            {formData ? (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S. N.</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Mobile No.</th>
                                <th>Expiary-date</th>
                                <th>Message</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>


                            {

                                formData.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobileNo}</td>
                                        <td>{item.expiary}</td>
                                        <td>{item.message}</td>
                                        <td>
                                            <Link to={`/update/${item._id}`}>
                                                <FontAwesomeIcon icon={faEdit} color="orange" /> Update
                                            </Link>
                                            <div></div>
                                            <Link onClick={() => deleteItem(item._id)}>
                                                <FontAwesomeIcon icon={faTrash} color="red" cursor="pointer" /> Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </Table>
                </div>
            ) : (
                <p>Please Wait....</p>
            )}
        </div>
    );
}

export default ClientList;
