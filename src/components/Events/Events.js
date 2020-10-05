import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SingleEvent from './SingleEvent';

const Events = () => {
  const [registeredEvent,setRegisteredEvent]=useState([]);
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  useEffect(()=>{
      fetch('http://localhost:7000/events')
      .then(res=>res.json())
      .then(data=>setRegisteredEvent(data));
  },[])
  return (
    <div>
      <h3 style={{textAlign:"center"}}>you have: {registeredEvent.length} events</h3>
      <div>
      {
        registeredEvent.map(event => <SingleEvent event={event}></SingleEvent>)
      }
      </div>
    
    </div>
  );
};

export default Events;