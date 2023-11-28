import "./App.css";
import React from "react";
import {Table} from 'react-bootstrap'
function App() {
   
  const users = [
    { name: "anil", email: "anil@test.com", contact: 888 },
    { name: "sidhu", email: "sidhu@test.com", contact: 111 },
    { name: "sam", email: "sam@test.com", contact: 111},
    { name: "peter", email: "peter@test.com", contact: 111},
  ];
   
   
  return (
    <div className="App">
      <h1>LIST WITH BOOTSTRAP TABLE</h1>
      <Table striped variant="dark">
        <tbody>
        <tr>
          <td>NAME</td>
          <td>EMAIL</td>
          <td>CONTACT</td>
        </tr>
       
      {users.map((item,i) => (
       item.contact === '111' ?
       <tr key={i}>
         <td>{item.name}</td>
         <td>{item.email}</td>
         <td>{item.contact}</td>
        </tr>:null
       
      ))}
      </tbody>
      </Table>
    </div>
  );
}

export default App;
