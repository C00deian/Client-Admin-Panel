import React, { Component } from 'react';
import NavBarManu from './NavBarManu'; // Make sure to import your components
import { BASEURL } from './constent';

class ClientUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            expiary: '',
            contact: '',
            _id: '', // Correct the property name
            message: ''
        };

        // Bind the update method to the component instance
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        fetch(BASEURL + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                this.setState({
                    name: result.name,
                    email: result.email,
                    _id: result._id, // Correct the property name
                    contact: result.contact,
                    expiary: result.expiary,
                    message: result.message
                });
            });
        });
    }

    update() {
        fetch(BASEURL + this.state._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => result.json())
            .then((resp) => {
                alert('Client has been updated');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Client Update</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Client Name" value={this.state.name} /> <br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Client Email" value={this.state.email} /> <br /><br />
                    <input onChange={(event) => { this.setState({ contact: event.target.value }) }}
                        placeholder="Client contact" value={this.state.contact} /> <br /><br />
                    <input onChange={(event) => { this.setState({ expiary: event.target.value }) }}
                        placeholder="Client expiary" value={this.state.expiary} /> <br /><br />
                    <input onChange={(event) => { this.setState({ message: event.target.value }) }}
                        placeholder="Client message" value={this.state.message} /> <br /><br />
                    <button onClick={this.update}>Update Client</button>
                </div>
            </div>
        );
    }
}

export default ClientUpdate;
