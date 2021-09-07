import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/getAllEvents' activeStyle>
            Events
          </NavLink>
          <NavLink to='/addevent' activeStyle>
            Add Event
          </NavLink>
          <NavLink to='/registerations' activeStyle>
           Registrations
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/search/id' activeStyle>
            Search By Id
          </NavLink>
          <NavLink to='/search/location' activeStyle>
            Search By Location
          </NavLink>
          <NavLink to='/deleteEvent' activeStyle>
            Delete Event
          </NavLink>
          <NavLink to='/updateEvent' activeStyle>
            Update Event
          </NavLink>
          
          
          
            
            
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;