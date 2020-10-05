import { Grid, Table } from '@material-ui/core';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

import logo from '../../resource/logos/Group 1329.png'
const SingleEvent = (props) => {
  const{name,email,id,CurrentDate,description,_id}=props.event;
/*  const [loggedInUser,setLoggedInUser]=useContext(UserContext); */

 
  return (
   
    <div className="col-md-4">
      <div  className="card" style={{marginBottom:'5px'}}>
        <div className="card-body">
      <div  className="card-text">
  <p>{name}</p>
  <p>{email}</p>
  <p>{description}</p>
  <p>{CurrentDate}</p>

      </div>
      <Button textAlign="center"  variant="danger" className="card-footer">cancel</Button>
  
        </div>

      </div>
     
    </div>

  );
};

export default SingleEvent;