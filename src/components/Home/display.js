import axios from "axios";
import React from "react";


class Display extends React.Component{

    constructor(){  //part of mounting
        super();
        this.state ={
            response_data : [],
        }
    }   
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( (response) => {
            const data =response.data;
            this.setState({
                response_data : data
            })
        })
        .catch(error => console.error("Error :", {error}));
    }
    render(){   //part of mounting
        return(
            <div>
                {this.state.response_data.map(
                    (item) =>(
                        <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
                    )
                )}</div>
        )
    }
}
export default Display;