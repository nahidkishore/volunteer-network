import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";

const SingleEvent = (props) => {
  const { name, email, CurrentDate, description, picture } = props.event;
  /*  const [loggedInUser,setLoggedInUser]=useContext(UserContext); */

  return (
    <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="card mb-3" style={{border:"none"}}>
        <div className="row d-flex justify-content-around">
        <div className="col-md-5">
          <img
            style={{ height: "300px" }}
            src={picture}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">{CurrentDate}</p>

           
          </div>
          <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>

        </div>
       
      
      </div>
    </div>
  );
};

export default SingleEvent;
