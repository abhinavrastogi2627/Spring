import './App.css';

import AddEvent from './components/Event-management/AddEvent';
import GetAllEvents from './components/Event-management/GetAllEvents';
import Registration from './components/Event-management/Registration';


import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import DeleteEvent from './components/Event-management/DeleteEvent';
import UpdateEvent from './components/Event-management/UpdateEvent';
import Header from './components/Event-management/Header';
import EventManage from './components/Event-management/EventManage';
import {GetEventById,GetEventsByLocation} from './components/Event-management/SearchEvent';



function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" component={EventManage} ></Route>
      <Route  path="/addevent" component={AddEvent} ></Route>
      <Route  path="/getAllEvents" component={GetAllEvents}></Route>
      <Route path ='/registration' component ={Registration} ></Route>
      <Route path ='/deleteEvent' component ={DeleteEvent} ></Route>
      <Route path ='/updateEvent' component ={UpdateEvent}></Route>
      <Route path ='/search/location' component ={GetEventsByLocation}></Route>
      <Route path ='/search/id' component ={GetEventById}></Route>
      


      </Switch> 
    
    </div>
  );
}

export default App;
