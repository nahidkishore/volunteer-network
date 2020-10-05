import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Data from '../Data/Data';
import './Home.css'
import HomeDetails from './HomeDetails';
const Home = () => {
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
        Data.map(data =><HomeDetails key={data.id} data={data}></HomeDetails>)
      }
    </div>
    </>
  
  );
};

export default Home;