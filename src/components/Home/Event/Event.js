import React, { useEffect, useState } from 'react';
import { CircularProgress } from "@material-ui/core";
import EventDetails from './EventDetails';

const Event = () => {
  const [eventData,setEventData]=useState([]);
  useEffect(()=>{
    fetch('https://radiant-harbor-03462.herokuapp.com/datas')
    .then(res =>res.json())
    .then(data =>setEventData(data))
  },[eventData])
  return (
    <section className="mt-5">
      <div className="container">
    
    <div className="row mt-5">
    {eventData.length === 0 && <CircularProgress />}
      {
        eventData.map(data =><EventDetails key={data.id} data={data}></EventDetails>)
      }
    </div>
    
    </div>
      
    </section>
  );
};

export default Event;