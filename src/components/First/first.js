import React from 'react';
import Second from '../Second/second'


const First =({username})=> (
    <div>
        <h1 style ={{color : 'red'}} >This is first component</h1>
        <h1 style ={{color : 'red'}} >Username is : {username}</h1>
        
        <Second username ={username}/>
    </div>
)
export default First;