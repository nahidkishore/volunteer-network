import { Grid } from '@material-ui/core';
import React, {useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

import SingleEvent from './SingleEvent';

const Events = () => {
  const [registeredEvent,setRegisteredEvent]=useState([]);
const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  useEffect(()=>{
      fetch('https://radiant-harbor-03462.herokuapp.com/events?email='+loggedInUser.email)
      .then(res=>res.json())
      .then(data=>setRegisteredEvent(data));
  },[loggedInUser])

  return (
    <div  >
      <h3 style={{textAlign:"center"}}>you have: {registeredEvent.length} events</h3>
    
<div className="row">
   {
        registeredEvent.map(event => <SingleEvent event={event}></SingleEvent>)
      }
</div>
   
  
  
      
    
    </div>
  );
};

export default Events;