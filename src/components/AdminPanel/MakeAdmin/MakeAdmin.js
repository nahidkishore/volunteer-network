import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [admin, setAdmin] = useState(null);

  const handleChange = (e) => {
    setAdmin({ [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    document.getElementById("email").value = "";
    fetch("https://radiant-harbor-03462.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("admin added successfully");
          document.getElementById("email").value = "";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-md-4 col-12 col-sm-6 mt-5">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-4 col-12 col-sm-6 mt-5  admin-Form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  ref={register({ required: true })}
                  placeholder="nahid@gmail.com"
                  onChange={handleChange}
                />
                {errors.name && <span className="error">Name is required</span>}
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
