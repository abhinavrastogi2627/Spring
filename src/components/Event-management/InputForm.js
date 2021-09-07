import React, { Component } from 'react'

class InputForm extends Component {
    constructor(props){
        super(props);

        this.name =React.createRef();
        this.desc =React.createRef();
        this.location =React.createRef();
        this.sDate =React.createRef();
        this.eDate =React.createRef();
        this.status =React.createRef();
        
    }
    createEvent =()=>{
        var event ={
            event_name : this.name.current.value,
            desc : this.desc.current.value,
            location : this.location.current.value,
            sDate : this.sDate.current.value,
            eDate : this.eDate.current.value,
            status : this.status.current.value
        }
        this.props.inputFunction(event);
    }

    render() {
        return (
            <div>
               <input name ='name'   ref ={this.name}>Enter Event Name : </input> <br/>
               <input name = 'desc'  ref ={this.desc}>Enter Event Description : </input> <br/>
               <input name ='status' ref ={this.status}>Enter Event Status : </input> <br/>
               <input name = 'sDate' ref ={this.sDate}>Enter Event Start Date : </input> <br/>
               <input name ='endDate' ref ={this.eDate}>Enter Event End Date : </input> <br/>
               <input name ='location' ref ={this.location}>Enter Event Location : </input> <br/>
               <button onClick ={this.createEvent}>Submit</button>           

               
            </div>
        )
    }
}

export default InputForm
