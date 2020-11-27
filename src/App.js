import React, { useState } from "react";
import './App.css';
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
 // const [auth,setAuth] = useState(null);
 
  
  return (
    <Router>
   
    <Switch>
  
    <Route path="/home" exact>
    <div className="app">
     {/* sidebar */}
     <Sidebar />
     {/* feed */}
     <Feed />
      {/* widget */}
     <Widget /> 
     </div>
     </Route>
   
     <Route path="/" exact>
    <Login />
    </Route>
     </Switch>
    
    </Router>
  );
}

export default App;
