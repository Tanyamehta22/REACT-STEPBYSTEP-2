import "./App.css";
import React from "react";
import { Table } from "react-bootstrap";
function App() {
  const users = [
    {
      name: "anil",
      email: "anil@test.com",
      address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" },
      ],
    },

    {
      name: "sidhu",
      email: "sidhu@test.com",
      address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" },
      ],
    },

    {
      name: "sam",
      email: "sam@test.com",
      address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" },
      ],
    },

    {
      name: "peter",
      email: "peter@test.com",
      address: [
        { hn: "10", city: "Noida", country: "India" },
        { hn: "34", city: "gurgaon", country: "India" },
        { hn: "43", city: "Delhi", country: "India" },
        { hn: "90", city: "Noida", country: "India" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <Table variant="dark" s>
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              {
                <Table variant="dark" striped>
                  <tbody>
                    {item.address.map((data) => (
                      <tr>
                        <td>{data.hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              }
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default App;
