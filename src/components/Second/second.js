import React from "react";

const Second =(props)=>(
    <div >
        <h1 style ={{color : 'blue'}}>This is second component</h1>
        <h1 style ={{color : 'blue'}}>The username is : {props.username}</h1>
        
    </div>
)

export default Second;