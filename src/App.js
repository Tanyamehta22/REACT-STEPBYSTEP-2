import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    getList();
  }, []);
  console.warn(users);

  function getList() {
    fetch("http://localhost:4000/todo").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setUser(resp);
        setName(resp[0].name);
        setMobile(resp[0].mobile);
        setEmail(resp[0].email);
      });
    });
  }

  function deleteUser(id) {
    fetch(`,http://localhost:4000/todo/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
  }
  function selectUser(id) {
    console.warn(users[id - 1]);
    let item = users[id - 1];
    setName(item.name);
    setMobile(item.mobile);
    setEmail(item.email);
  }

  return (
    <div className="App">
      <h1>DELETE DATA WITH API CALL</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>DELETE</button>
              </td>
              <td>
                <button onClick={() => selectUser(item.id)}>UPDATE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" value={name} />
        <br />
        <br />
        <input type="text" value={email} />
        <br />
        <br />
        <input type="text" value={mobile} />
        <br />
        <br />
        <button>UPDATE USER</button>
      </div>
    </div>
  );
}

export default App;
