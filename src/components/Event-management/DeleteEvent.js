import axios from 'axios'
import React, { Component } from 'react'

class DeleteEvent extends Component {

    constructor() {
        super()
    
        this.state = {
             id : 0
        }
    }
 deleteHandler(e)  {
     this.setState({
            id : e.target.value
     })
 }
 clickHandler(id){
     if(!this.state.id){
         axios.delete('/v1/event/delete',id)
         .then(res =>{
             console.log("Event Deleted!")
         })
         .catch( error =>{
             console.error("Error : ",error)}
         )
     }
     else alert("Please enter Event Id")
 }
    render() {
        return (
            <div>
                <h2>Delete the Event</h2> <br/>
                <input onChange ={this.deleteHandler} placeholder="Input Event Id" ></input>
                <button onClick ={()=>{this.clickHandler(this.state.id)}} >Delete</button>
                
            </div>
        )
    }
}
export default DeleteEvent
