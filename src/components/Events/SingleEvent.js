import React from "react";

const SingleEvent = ({ event, handleCancelEvent }) => {
  const { name, CurrentDate, picture, _id } = event;
  /*  const [loggedInUser,setLoggedInUser]=useContext(UserContext); */

  return (
    <div className=" col-md-4 text-center my-5  ">
      <div className="card d-flex align-items-center shadow {_id}">
        <img src={picture} alt="" className="img-fluid " />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="">{CurrentDate}</p>
          <button
            onClick={() => handleCancelEvent(_id)}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
