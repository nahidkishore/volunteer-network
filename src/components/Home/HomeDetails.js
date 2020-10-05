import React from 'react';
import { Card } from 'react-bootstrap';

const HomeDetails = (props) => {
  const{id,name,picture}=props.data;
  console.log(props.data)
  return (

   /*  <div>
      <Card className="bg-dark text-white">
  <Card.Img src={picture} alt="Card image" />
  <Card.ImgOverlay>
  <Card.Title>{name}</Card.Title>
  
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    </div> */
     <div className="col-md-3">
      <div className="card" style={{marginBottom:'5px'}}>
        <img style={{height:'300px'}} src={picture} alt=""/>
        <div className="card-body">
      
        <p className="card-text"><small class="text-muted">{name}</small></p>

        </div>

      </div>
     
    </div>
  );
};

export default HomeDetails;