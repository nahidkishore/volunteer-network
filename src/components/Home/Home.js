import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Home.css'
import HomeDetails from './HomeDetails';
const Home = () => {
  const [eventData,setEventData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:7000/datas')
    .then(res =>res.json())
    .then(data =>setEventData(data))
  },[eventData])

  return (
    <>
      <div className="home-container">
      <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
      <Form inline textAlign="center">
      <FormControl style={{width:'350px'}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="success">Search</Button>
    </Form> 
      
    </div>
    <div className="row">
      {
        eventData.map(data =><HomeDetails key={data.id} data={data}></HomeDetails>)
      }
    </div>
    </>
  
  );
};

export default Home;