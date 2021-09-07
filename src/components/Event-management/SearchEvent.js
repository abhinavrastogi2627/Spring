import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class GetEventById extends Component {
    constructor(){
        super();
        this.state ={
            id: 0,
            event : {}
        }
    }
    handleChange(e){
        this.setState({
            id: e.target.value
        })
    }

    // deleteEvent(id){
    //     axios.delete('/v1/delete/',id)
    // }

    handleClick(){
        axios.get('/v1/event/',this.state.id)
        .then(res =>{
            this.setState({
                event : res.data
            })
        })
    }
    // refreshPage(){
    //     window.Location.refreshPage();
    // }

    render(){


        return(
            <div>
                <input placeholder ="Enter Event Id : " type ='number' onChange ={this.handleChange} ></input> <br/>
                <button  onClick={this.handleClick} >Submit</button>
                <br/><br/>
                
                       {this.state.id && <div className ="Event" key ={this.state.event.eventId}>
                            <h3>{this.state.event.eventId}  : {this.state.event.eventName}</h3> <br/>
                            <b><p>{this.state.event.description}</p>
                            <p>status : {this.state.event.status}</p>
                            <p>Start Date : {this.state.event.startDate}</p>
                            <p>End Date : {this.state.event.endDate}</p>
                            <p>Location : {this.state.event.location}</p></b>
{/* 
                            <Link className ='option2' to ={{pathname ='/talks', id:event.eventId , name : event.eventName}}>Talks</Link>
                            <Link className ='option2' to ={{pathname ='/register', id:event.eventId , name : event.eventName}}>Register</Link>
                            <button type ="reset" onClick={()=>{this.deleteEvent(event.eventId); this.refreshPage();}}>Delete Event</button> */}
                            </div>
    }
            </div>
        )
    }

}


export class GetEventsByLocation extends Component {
    constructor(props){
        super(props);
        this.state ={
            location : '',
            event : ''
        }
        this.locationref = React.createRef();
     
        this.locationHandler = this.locationHandler.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
    }

   locationHandler(e){
       if(e.target.name === "location")
        this.setState({ 
            location : e.target.value
        })
        if(e.target.name === "event")
        this.setState({
            location : e.target.value
        })
    }
    submitHandler(e){

       
        axios.get("/v1/event/location=",{
            params : {
                location : this.locationref.current.value
            }
        })
        .then((response) =>{
                this.setState({
                        event : JSON.stringify(response.data)
                })
        }
        
        );
    }
    render() {
        return (
            <div >
                <input ref = {this.locationref} type ='email' value ={this.state.location}> Enter Location to be searched : </input> <br/>
                <button  onClick ={this.submitHandler} >Submit {this.state.location}</button> <br/>
                <h2> Event Details : </h2>
                <p>{this.state.event}</p>

            </div>
        )
    }
}


