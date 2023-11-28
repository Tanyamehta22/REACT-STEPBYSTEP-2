import "./App.css";
import React from "react";
function App() {
  // const students = ["Anil", "Sidhu", "Sam", "Peter"];
  const students = [
    { name: "anil", email: "anil@test.com", contact: 888 },
    { name: "sidhu", email: "sidhu@test.com", contact: 111 },
    { name: "sam", email: "sam@test.com", contact: 222 },
    { name: "peter", email: "peter@test.com", contact: 333 },
  ];
  //map looping
  // students.map((item)=>{
  //   console.warn("My Name is:",item)
  // });

  // for(let i=0;i<students.length;i++)
  // {
  //   console.warn("in for loop My Name is:", students[i])
  // }
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <table border='1'>
      <tr>
         <td>NAME</td>
         <td>EMAIL</td>
         <td>CONTACT</td>
        </tr>
      {students.map((data) => (
        <tr>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.contact}</td>
        </tr>
      ))}
      </table>
    </div>
  );
}

export default App;
