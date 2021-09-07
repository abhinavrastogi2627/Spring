import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => (

    <div className ='header'>
        <Link className ='option' to ='/'><h3>Home</h3></Link>
        <Link className ='option' to ='/calculator'><h3>Calculator</h3></Link>
        <Link className ='option' to ='/props-demo'><h3>Props Demo</h3></Link>
        

    </div>
)
export default Header;