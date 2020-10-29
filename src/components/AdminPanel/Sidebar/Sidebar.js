import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
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
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between  py-5 px-4"
      style={{ height: "100%" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/home" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/events" className="text-white">
            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
            <span>My Events</span>
          </Link>
        </li>

        <li>
          <Link to="/registerList" className="text-white">
            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
            <span>Volunteer List</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
            <span>Add Event</span>
          </Link>
        </li>

        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
            <span>Add Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
