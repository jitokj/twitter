import React from "react";
import './App.css';
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";


function App() {
  return (
    <div className="app">
    
     {/* sidebar */}
     <Sidebar />
     {/* feed */}
     <Feed />
     {/* widget */}
     <Widget />
    </div>
  );
}

export default App;
