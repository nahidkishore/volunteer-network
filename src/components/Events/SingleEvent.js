import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const SingleEvent = (props) => {
  const{name,email,CurrentDate,description,picture}=props.event;
 /*  const [loggedInUser,setLoggedInUser]=useContext(UserContext); */

 
  return (
   
    <div className="col-md-4">
      <div  className="card" style={{marginBottom:'5px'}}>
        <div className="card-body">
          <img style={{height:'300px'}} src={picture} alt=""/>
      <div  className="card-text">
                <p>{name}</p>
                <p>{CurrentDate}</p>

      </div>
      <Button textAlign="center"  variant="danger" className="card-footer">Cancel</Button>
  
        </div>

      </div>
     
    </div>

  );
};

export default SingleEvent;