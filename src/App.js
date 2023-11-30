import "./App.css";
import React from "react";
import User from './USER8'
function App() {
  const users = [
    {
      name: "anil",
      email: "anil@test.com",
      contact: "111"
    },

    {
      name: "sidhu",
      email: "sidhu@test.com",
      contact: "222"
    },

    {
      name: "sam",
      email: "sam@test.com",
      contact: "333"
    },

    {
      name: "peter",
      email: "peter@test.com",
       contat:"444"
    },
  ];

  return (
    <div className="App">
      <h1>REUSE COMPONENT WITH LIST</h1>
      {
        users.map((item,i)=>
        <User/>
        )
      }
      </div>
  );
         
}

export default App;
