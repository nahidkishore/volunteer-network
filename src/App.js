import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Events from './components/Events/Events';
import Admin from './components/AdminPanel/Admin';
import VolunteerRegisterList from './components/AdminPanel/VolunteerRegisterList';
import Blogs from './components/Others/Blogs';
import Donation from './components/Others/Donation';
import Home from './components/Home/Home';
export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
 <Switch>
   <Route path="/home">
   <Home></Home>
   
   </Route>

   <Route exact path="/">
   <Home></Home>
   
   </Route>

    <PrivateRoute  path="/register/:eventKey">
    <Registration></Registration>
   </PrivateRoute>

   <Route path="/login">
    <Login></Login>
   </Route>

   <Route path="/events">
    <Events></Events>
   </Route>
   <Route path="/admin">
     <Admin />
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
