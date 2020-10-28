import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../resource/logos/Group 1329.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img src={logo} alt="" className="img-fluid" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.22em" }}>
            <li class="nav-item active">
              <Link className="nav-link ml-2" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/donation">
                Donation
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/blog">
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/login">
                <button className="button-reg">Register</button>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link " to="/admin">
                <button className="button">Admin</button>
              </Link>
            </li>
            <li class="nav-item">
              <p>{loggedInUser.name}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
