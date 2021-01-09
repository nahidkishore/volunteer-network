import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Home/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Events from "./components/Events/Events";
import Admin from "./components/AdminPanel/Admin";
import VolunteerRegisterList from "./components/AdminPanel/VolunteerRegisterList";
import Blogs from "./components/Others/Blogs";
import Donation from "./components/Others/Donation";
import Home from "./components/Home/Home";
import AllEvents from "./components/AdminPanel/AllEvents/AllEvents";
import MakeAdmin from "./components/AdminPanel/MakeAdmin/MakeAdmin";
import Dashboard from "./components/Dashboard/Dashboard";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>




      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/register/:eventKey">
            <Registration></Registration>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/events">
            <Events></Events>
          </PrivateRoute>
          <Route path="/AllEvents">
            <AllEvents></AllEvents>
          </Route>
          <Route path="/addEvents">
            <Admin />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/registerList">
            <VolunteerRegisterList></VolunteerRegisterList>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    
    </UserContext.Provider>
  );
}

export default App;
