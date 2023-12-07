import "./App.css";
import React from "react";
import Cols from './cols'
function App() {

  function parentAlert(data)
  {
    console.log(data)
    alert(data.name);
  }
  
  return (
      <div className="App">
        <h1>Lifting State Up</h1>
        <User alert={parentAlert} />
      </div>
     
  );
}

export default App;
