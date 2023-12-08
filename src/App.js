import "./App.css";
import React, {useState} from "react";
import User from './User11'
function App(){
  let [val, setVal] = useState("000")
  let [item, setItem] = useState(" ")
   

  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={(e)=> setVal(e.target.value)}/>
      <h3>Value {val}</h3>
    </div>
  );
}

export default App;
