import React, { createRef, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import EventDetails from './EventDetails';
import { Button, Form, FormControl } from 'react-bootstrap';

const Event = () => {
  const [eventData, setEventData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterEvents, setFilterEvents] = useState([]);
  useEffect(() => {
    fetch('https://radiant-harbor-03462.herokuapp.com/datas')
      .then((res) => res.json())
      .then((data) => setEventData(data));
  }, [eventData]);
  /* const inputValue = createRef();

  const handleSearch = () => {
    const searchValue = inputValue.current.value;

    document.getElementById("search").value = "";
    fetch(
      `https://radiant-harbor-03462.herokuapp.com/events?filter=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setEventData(data));
  }; */
  useEffect(() => {
    setFilterEvents(
      eventData.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, eventData]);
  return (
    <section className='mt-5'>
      <div className='container '>
        <h2 className='text-center'>I GROW BY HELPING PEOPLE IN NEED</h2>
        <div className=' d-flex justify-content-center align-items-center mt-5'>
          <Form inline textAlign='center'>
            <FormControl
              /*  ref={inputValue} */
              style={{ width: '350px' }}
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              id='search'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              className='button-reg'
              style={{
                borderRadius: '7px',
                padding: '5px 25px',
                cursor: 'pointer',
              }}

              /*  onChange={(e) => setSearch(e.target.value)} */
            >
              Search
            </Button>
          </Form>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-5'>
          {filterEvents.length === 0 && <CircularProgress />}
          {filterEvents.map((data) => (
            <EventDetails key={data.id} data={data}></EventDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
