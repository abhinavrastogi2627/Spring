import axios from 'axios';
import React, { Component } from 'react'
import InputForm from './InputForm';

class AddEvent extends Component {

    constructor(){
        super();
        this.state ={
          eventid: 0,
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
            eventName : this.state.eventName,
            description : this.state.eventDesc,
            status : this.state.eventStatus,
            startDate : this.state.eventStart,
            endDate : this.state.eventEnd,
            location : this.state.eventLocation
        }


        axios.post('/v1/events/',)
    }

    handleChange(e){
        const name =e.target.name
        switch(name){
           
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
              Event Name: 
            </label>
            <input name ="Name" type="text" value={this.state.eventName} onChange={this.handlechange}/>
            <br/>

            <label>
              Event Description: 
            </label>
            <input name="Desc" type="text" value={this.state.eventDesc} onChange={this.handlechange}/>
            <br/>

            <label>
              Event Status:
            </label>
            <select name="Status" value={this.state.eventStatus} onChange={this.handleChange}>
              <option key ="option1" value="Created">
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
            <input name="startDate" type="text" value={this.state.eventStart} onChange={this.handlechange}/>
            <br/>

            <label>
              Event End Date: 
            </label>
            <input name="endDate" type="text" value={this.state.eventEnd} onChange={this.handlechange}/>
            <br/>
            
            <label>
              Event Location:
            </label>
            <select name="Location" value={this.state.eventLocation} onChange={this.handleChange}>
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
              Save Record
            </button>
          </div>
        )
    }
}

export default AddEvent
