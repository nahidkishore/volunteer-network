import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Banner = () => {
  return (
  <section className="my-5">
      <div className="container ">
      <h2 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h2>
     <div className=" d-flex justify-content-center align-items-center mt-5">
     <Form inline textAlign="center">
      <FormControl style={{width:'350px'}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="button-reg"style={{borderRadius:'7px', padding:'5px 25px', cursor:'pointer'}}>Search</Button>
    </Form>
       </div> 
    </div>
  </section>
  );
};

export default Banner;