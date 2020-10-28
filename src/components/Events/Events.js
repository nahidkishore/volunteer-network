import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { CircularProgress } from "@material-ui/core";
import SingleEvent from "./SingleEvent";

const Events = () => {
  const [registeredEvent, setRegisteredEvent] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://radiant-harbor-03462.herokuapp.com/events?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setRegisteredEvent(data))
  }, [registeredEvent]);

 

  return (
    <section>
      <div className="container">
        <h3 style={{ textAlign: "center" }}>
          you have: {registeredEvent.length} events
        </h3>

        <div className="row mt-5">
        {registeredEvent.length === 0 && <CircularProgress />}
          {registeredEvent.map((event) => (
            <SingleEvent event={event} key={event._id} ></SingleEvent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
