import { TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resource/logos/Group 1329.png';
import Data from '../Data/Data';
import './Registration.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import 'date-fns';


const Registration = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);

  const {eventKey}=useParams();
  const[events,setEvents]=useState({});
const{name,picture,id}=events;

   useEffect(() =>{
    const selectedEvent= Data.find(item => item.id==eventKey)
    setEvents(selectedEvent)
  },[eventKey])

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [selectedDate, setSelectedDate] = useState({
    CurrentDate:new Date(),
    
  });

  const handleCurrentDate = (date) => {
    const newDates={...selectedDate}
    newDates.CurrentDate=date;
    setSelectedDate(newDates);
  };
  const history=useHistory();
  const userDescription = document.getElementById("description");
const handleRegister=() => {
  const description=userDescription.value;

  const newRegistration={...loggedInUser, ...selectedDate, ...events, description};
  console.log(newRegistration);
  fetch('https://radiant-harbor-03462.herokuapp.com/addRegisteredEvent',{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(newRegistration)
  })
  .then(res=>res.json())
.then(data=>{
  console.log(data);
})
history.push('/events');
}


  return (

    <div className="Registration-Form">
      <img src={logo} alt=""/>
      <div className="box">
        <div className="login">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
  <Form.Group>
  <Form.Control  size="lg" type="text" placeholder="Your name" ref={register({ required: true })} value={loggedInUser.name} />
  {errors.name && <span className="error">Name is required</span>}
  <br />
  <Form.Control type="text" value={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email address" />
  {errors.email && <span className="error">Email is required</span>}
  <br />
 
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="current date"
          value={selectedDate.CurrentDate}
          onChange={handleCurrentDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    
    </MuiPickersUtilsProvider>


  <Form.Control size="sm" type="text" id="description" name="description" ref={register({ required: true })} placeholder="Description" />
  {errors.description && <span className="error">Description is required</span>}
<br/>
  <Form.Control size="sm" type="text" ref={register({ required: true })} defaultValue={name} />
  <br/>
  <Button onClick={handleRegister} variant="success">Registration</Button>
</Form.Group>
     
    </form>
        </div>
      
      </div>
      
     
    </div>
  );
};

export default Registration;