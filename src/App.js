import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState(null);

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
        setUserId(resp[0].id);
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
    setUserId(item.id);
  }

  function updateUser() {
    let item = { name, email, mobile, userId };
    fetch(`,http://localhost:4000/todo/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        <button onClick={updateUser}>UPDATE USER</button>
      </div>
    </div>
  );
}

export default App;
