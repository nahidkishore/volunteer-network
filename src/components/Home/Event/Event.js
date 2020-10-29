import React, { createRef, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import EventDetails from "./EventDetails";
import { Button, Form, FormControl } from "react-bootstrap";

const Event = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetch("https://radiant-harbor-03462.herokuapp.com/datas")
      .then((res) => res.json())
      .then((data) => setEventData(data));
  }, [eventData]);
  const inputValue = createRef();

  const handleSearch = () => {
    const searchValue = inputValue.current.value;

    document.getElementById("search").value = "";
    fetch(
      `https://radiant-harbor-03462.herokuapp.com/events?filter=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setEventData(data));
  };

  return (
    <section className="mt-5">
      <div className="container ">
        <h2 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h2>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <Form inline textAlign="center">
            <FormControl
              ref={inputValue}
              style={{ width: "350px" }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              id="search"
            />
            <Button
              className="button-reg"
              style={{
                borderRadius: "7px",
                padding: "5px 25px",
                cursor: "pointer",
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Form>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          {eventData.length === 0 && <CircularProgress />}
          {eventData.map((data) => (
            <EventDetails key={data.id} data={data}></EventDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
