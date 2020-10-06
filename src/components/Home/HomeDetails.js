import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const HomeDetails = (props) => {
  const{id,name,picture}=props.data;
  console.log(props.data)

  let history=useHistory();
  const handleDetails = ()=> {
    history.push(`/register/${id}`)
  }
  return (

  
     <div className="col-md-3" onClick={handleDetails}>
      <div  className="card" style={{marginBottom:'15px'}}>
        <img style={{height:'300px'}} src={picture} alt=""/>
        <div className="card-body">
      
        <p className="card-text"><small class="text-muted">{name}</small></p>

        </div>

      </div>
     
    </div>
  );
};

export default HomeDetails;