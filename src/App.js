import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
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
export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
  <p>name:{loggedInUser.name}</p>
    <Router>
 <Header></Header>
 <Switch>
   <Route path="/home">
   <Home></Home>
   </Route>
   <Route exact path="/">
   <Home></Home>
   </Route>
   <Route path="/login">
    <Login></Login>
   </Route>
   <Route path="*"><NotFound></NotFound></Route>
 </Switch>
    </Router>
     
    </UserContext.Provider>
   
  );
}

export default App;
