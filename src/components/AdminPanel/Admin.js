import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Data from "../Data/Data";
import "./Admin.css";
import logo from "../../resource/logos/users-alt 1.png";
import plus from "../../resource/logos/plus 1.png";

const Admin = () => {
  const history = useHistory();
  const [saveEvents, setSaveEvents] = useState({});

  const handleAddData = () => {
    fetch("https://radiant-harbor-03462.herokuapp.com/addAllData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saveEvents),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          history.push("/");
        }
      });
  };
  const list = () => {
    history.push("/registerList");
  };
  return (
    <div className="col row ">
      <div className="col-12 col-md-6">
        <p style={{ cursor: "pointer" }} onClick={handleAddData}>
          <img src={plus} alt="" /> Add event
        </p>
        <div>
          <p style={{ cursor: "pointer" }} onClick={list}>
            <img src={logo} alt="" /> Volunteer Register List
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 form">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                onBlur={(save) =>
                  setSaveEvents({ ...saveEvents, name: save.target.value })
                }
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                onBlur={(save) =>
                  setSaveEvents({
                    ...saveEvents,
                    description: save.target.value,
                  })
                }
                type="text"
                placeholder="Date"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onBlur={(save) =>
                  setSaveEvents({
                    ...saveEvents,
                    date: new Date(save.target.value).toDateString(),
                  })
                }
                as="textarea"
                type="text"
                placeholder="description"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                onBlur={(save) =>
                  setSaveEvents({ ...saveEvents, picture: save.target.value })
                }
                as="textarea"
                type="text"
                placeholder="paste your image url link"
              />
            </Form.Group>
            {/*   <Form.Group as={Col}>
      <Form.Label>Banner</Form.Label>

      <Form.Control  type="file" />
    </Form.Group> */}
          </Form.Row>
        </Form>
        <Button variant="primary" onClick={handleAddData}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Admin;
