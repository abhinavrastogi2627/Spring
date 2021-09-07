import React, { Component } from 'react'
import axios from 'axios';

class GetAllEvents extends Component {
    constructor(){
        super();
        this.state ={
            response_data : []
        }
    }
    componentDidMount(){
        axios.get("/v1/items/")
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
                    <th>Event Id</th>
                    <th>Event Name</th>
                    <th>Event Description</th>
                    <th>Event Status</th>
                    <th>Event Start Date</th>
                    <th>Event End Date</th>
                    <th>Event Location</th>
                    </tr>
                {this.state.response_data.map(
                    (event) =>(
                         <tr>
                              <td>{event.eventId}</td>
                              <td> {event.eventName} </td>
                              <td> {event.description}</td>
                              <td> {event.status}</td>
                              <td> {event.startDate}</td>
                              <td> {event.endDate} </td>
                              <td> {event.location}</td>
                              </tr>
                    )
                )
                }
                </table>
            </div>
        )
    }
}

export default GetAllEvents
