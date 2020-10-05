import { Table } from '@material-ui/core';
import React from 'react';

import logo from '../../resource/logos/Group 1329.png'
const SingleEvent = (props) => {
  const{name,email,id,CurrentDate,description,_id}=props.event;
 

  const deleteEvent = () => {
    fetch("http://localhost:7000/delete/"+_id,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(result=>{
      console.log('deleted successfully')
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