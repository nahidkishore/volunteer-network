import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faSignOutAlt,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://radiant-harbor-03462.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <section>
      <div className="container">
        <div
          className="sidebar d-flex flex-column justify-content-between  py-5 px-4"
          style={{ height: "100%" }}
        >
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
                <span>Dashboard</span>
              </Link>
            </li>

            {!isAdmin ? (
              <div>
                <li>
                  <Link to="/events" className="text-white">
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <span>My Events</span>
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/registerList" className="text-white">
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <span>Volunteer Register List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/addEvents" className="text-white">
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <span>Add Event</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
                    <span>All Events List </span>
                  </Link>
                </li>
                <li>
                  <Link to="/makeAdmin" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                    <span>Make Admin</span>
                  </Link>
                </li>
              </div>
            )}

            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
