import "./App.css";
import React from "react";

function App() {
  const [data, setData] = React.useState({ nme: "anil", age: 27 });
  return (
    <div className="App">
      <h1>State Object with hooks</h1>
      {/* METHOD 1- */}
      <input
        type="text"
        placeholder="enter name"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      METHOD 2-
      <input
        type="text"
        placeholder="enter age"
        value={data.age}
        onChange={(e) => {
          setData({ name: data.name, age: e.target.value });
        }}
      />
    </div>
  );
}

export default App;
