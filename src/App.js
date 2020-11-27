import React, { useState } from "react";
import './App.css';
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";


function App() {
 // const [auth,setAuth] = useState(null);
 
  
  return (
    <div className="app">
    <Login />
     {/* sidebar */}
     {/* <Sidebar /> */}
     {/* feed */}
     {/* <Feed /> */}
      {/* widget */}
     {/* <Widget />  */}
    </div>
  );
}

export default App;
