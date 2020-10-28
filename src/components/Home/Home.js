import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Home.css'
import HomeDetails from './HomeDetails';
import { CircularProgress } from "@material-ui/core";


const Home = () => {
  const [eventData,setEventData]=useState([]);
  useEffect(()=>{
    fetch('https://radiant-harbor-03462.herokuapp.com/datas')
    .then(res =>res.json())
    .then(data =>setEventData(data))
  },[eventData])

  return (
    <div className="container">
      <div className="home-container">
      <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
      <Form inline textAlign="center">
      <FormControl style={{width:'350px'}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="success" style={{borderRadius:'7px', padding:'5px 25px', cursor:'pointer'}}>Search</Button>
    </Form> 
      
    </div>
    <div className="row mt-5">
    {eventData.length === 0 && <CircularProgress />}
      {
        eventData.map(data =><HomeDetails key={data.id} data={data}></HomeDetails>)
      }
    </div>
    </div>
  
  );
};

export default Home;