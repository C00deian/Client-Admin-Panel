import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from 'react-router-dom'
import { BASEURL } from './constent';
import NavBarManu from './NavBarManu'

class ClientList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
       this.getData()
    }
    getData()
    {
        fetch(BASEURL+"getAllList").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id)

    {
        fetch(BASEURL +`client/${id}`,
        {
            method: "DELETE",
            // headers:{
            //     'Content-Type':'application/json'
            // },
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Client has been  Deleted")
                this.getData()
            })
        })
    }
    render() {

        return (
            <div>
                <NavBarManu />
                <h1>Client List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>contact</th>
                                        <th>Expiary-date</th>
                                        <th>Message</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.contact}</td>
                                                <td>{item.expiary}</td>
                                                <td>{item.message}</td>
                                                <td><Link to={"/update/" + item._id}><FontAwesomeIcon icon={faEdit} color="orange" />update</Link>
                                <div></div>
                                                <Link onClick={()=>this.delete(item._id)}><FontAwesomeIcon icon={faTrash} color="red"  cursor="pointer"/>Delete</Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default ClientList;