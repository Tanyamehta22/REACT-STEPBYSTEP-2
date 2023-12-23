import "./App.css";
import React from "react";
import User from './User13';
function App() {
  const [count,setCount]=React.useState(0)
   return(
    <div className="App">
      <User count={count} />
      <button onClick={()=>setCount(Math.floor(Math.random()*10))}>UPDATE COUNTER</button>
    </div>

   );
}

export default App;
