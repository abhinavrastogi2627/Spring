import React, { Component } from 'react'
import axios from 'axios';

class Registration extends Component {
    componentDidMount(){
        axios.get("/v1/person/")
        .then( (response) => {
            const data =response.data;
            this.setState({
                response_data : data
            })
        })
        .catch(error => console.error("Error :", {error}));
    }
    render() {
        return (
            
            <div>
                <table border ='2'>
                    <tr>
                    <th>Person Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Organization</th>
                    <th>Designation</th>
                    <th>Email</th>
                    </tr>
                {this.state.response_data.map(
                    (person) =>(
                         <tr>
                              <td>{person.personId}</td>
                              <td>{person.fName} </td>
                              <td> {person.lName}</td>
                              <td> {person.organization}</td>
                              <td> {person.designation}</td>
                              <td> {person.email} </td>                            
                              </tr>
                    )
                )
                }
                </table>
            </div>
        )
    }
}

export default Registration