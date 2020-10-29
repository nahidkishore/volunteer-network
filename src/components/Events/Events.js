import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { CircularProgress } from "@material-ui/core";
import SingleEvent from "./SingleEvent";
import Sidebar from "../AdminPanel/Sidebar/Sidebar";

const Events = () => {
  const [registeredEvent, setRegisteredEvent] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://radiant-harbor-03462.herokuapp.com/events?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setRegisteredEvent(data));
  }, [loggedInUser]);

  const handleCancelEvent = (id) => {
    fetch(`https://radiant-harbor-03462.herokuapp.com/cancelEvent/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          const newEvents = registeredEvent.filter(
            (vEvent) => vEvent._id !== id
          );
          setRegisteredEvent(newEvents);
          console.log(result);
        }
      });
  };

  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <h2>
            Welcome to <span className="text-brand">{loggedInUser.name}</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 col-sm-6 mt-5">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8 col-12 col-sm-6">
            <h3 className="mt-5" style={{ textAlign: "center" }}>
              you have:{" "}
              <span className="text-brand">{registeredEvent.length}</span>{" "}
              events
            </h3>
            <div className="d-flex justify-content-center">
              <div className="row  mt-5">
                {registeredEvent.length === 0 && <CircularProgress />}
                {registeredEvent.map((event) => (
                  <SingleEvent
                    event={event}
                    key={event._id}
                    handleCancelEvent={handleCancelEvent}
                  ></SingleEvent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
