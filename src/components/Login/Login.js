import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../resource/logos/Group 1329.png";
import "./Login.css";
import googleIcon from "../../resource/images/google.png";
import { Button } from "react-bootstrap";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };

        setLoggedInUser(signedInUser);
        // console.log(signInUser);

        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
<section>
<div className="container login-container">
     <Link to="/home">
     <img className="logo img-fluid mt-5" src={logo} alt="" />
     </Link>
     <h3 className="text-center">Register as a Volunteer</h3>
      <div className="box d-flex justify-content-center align-items-center text-center">
     
        <div className="login  ">
          <h3>Login with</h3>
          <button onClick={handleGoogleSignIn}>
          
            <img src={googleIcon} className="GoogleIcon" alt="" /> Continue with
            Google
          </button>
        </div>
      </div>
    </div>
</section>
  );
};

export default Login;
