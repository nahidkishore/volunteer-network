import { Table } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';

import logo from '../../resource/logos/Group 1329.png'
const SingleEvent = (props) => {
  const{name,email,id,CurrentDate,description,_id}=props.event;
 const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  const deleteEvent = () => {
    fetch(`http://localhost:7000/delete/${id}`, {
      method: 'DELETE'
  })
      .then(result => {
          
          console.log(result, 'delete successfully')
      })
  }
  return (
   <div className=" row justify-content-center">
    <div>
    <p>{name}  {email}  {(new Date(CurrentDate).toDateString('dd/MM/yyyy'))} {description}</p> <button onClick={() =>deleteEvent()}>delete</button>
      </div>
   </div>


     
    

  );
};

export default SingleEvent;