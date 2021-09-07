import React, { Component } from 'react'
import axios from 'axios';


class UpdateEvent extends Component {
    constructor(){
        super();
        this.state ={
          eventId: 0,
          eventName : '',
          eventDesc : '',
          eventStatus : '',
          eventStart : '',
          eventEnd : '',
          eventLocation : ''
        }
        this.handleChange =this.handleChange.bind(this);
        this.clickHandler =this.clickHandler.bind(this);

    }

    clickHandler(){
        const event ={
            eventId : (this.state.eventId),
            eventName : this.state.eventName,
            description : this.state.eventDesc,
            status : this.state.eventStatus,
            startDate : this.state.eventStart,
            endDate : this.state.eventEnd,
            location : this.state.eventLocation
        }


        axios.put('https://reqres.in/invalid-url', event)
        .then(response => console.log(response.data))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    handleChange(e){
        const name =e.target.name
        switch(name){
            case "id":
                this.setState({
                    eventId : e.target.value
                })
                break;
            case "Name":
                this.setState({
                    eventName : e.target.value
                })
                break;
            case "Desc":
                this.setState({
                    eventDesc : e.target.value
                })
                break;
            case "Status":
                this.setState({
                    eventStatus : e.target.value
                })
                break;
            case "startDate":
                this.setState({
                    eventStart : e.target.value
                })
                break;
            case "endDate":
                this.setState({
                    eventEnd : e.target.value
                })
                break;
            case "Location":
                this.setState({
                    location : e.target.value
                })
                break;
        }
    }

    render() {
        return (
            <div>
                 <label>
              Event Id: 
            </label>
            <input type="number" value={this.state.eventId} onChange={this.handlechange}/>
            <br/>
            <label>
              Event Name: 
            </label>
            <input type="text" value={this.state.eventName} onChange={this.handlechange}/>
            <br/>

            <label>
              Event Description: 
            </label>
            <input type="text" value={this.state.eventDesc} onChange={this.handlechange}/>
            <br/>

            <label>
              Event Status:
            </label>
            <select value={this.state.eventStatus} onChange={this.handleChange}>
              <option value="Created">
                Bangalore
              </option>
              <option value="In Progress">
                Moorsville
              </option>
              <option value="Completed">
                Online
              </option>
            </select>
           <br/>
            <label>
              Event Start Date: 
            </label>
            <input type="text" value={this.state.eventStart} onChange={this.handlechange}/>
            <br/>

            <label>
              Event End Date: 
            </label>
            <input type="text" value={this.state.eventEnd} onChange={this.handlechange}/>
            <br/>
            
            <label>
              Event Location:
            </label>
            <select value={this.state.eventLocation} onChange={this.handleChange}>
              <option value="Bangalore">
                Bangalore
              </option>
              <option value="Moorsville">
                Moorsville
              </option>
              <option value="Online">
                Online
              </option>
            </select>

            <hr/>
            <button onClick={this.clickHandler}>
              Update Record
            </button>
          </div>
        )
    }
}

export default UpdateEvent
