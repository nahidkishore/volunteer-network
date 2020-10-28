import React from "react";
import { useHistory } from "react-router-dom";
import "./EventDetails.css";

const EventDetails = (props) => {
  const { id, name, picture } = props.data;
  console.log(props.data);

  let history = useHistory();
  const handleDetails = () => {
    history.push(`/register/${id}`);
  };
  return (
    <div className="col-12 col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="card mb-5 " onClick={handleDetails}>
        <img
          style={{ height: "300px", cursor: "pointer" }}
          src={picture}
          alt=""
          className="img-fluid"
        />
        <div className="card-img-overly d-flex flex-column justify-content-center " >
          <button className="card-text event-name" >
            <small class="text-muted">{name}</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
