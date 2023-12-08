import "./App.css";
import React, {useRef} from "react";
import User from './User11'
function App(){
  let inputRef = useRef(null)
  function updateInput()
  {
    
    inputRef.current.value="1000"
    inputRef.current.focus();
    inputRef.current.style.color="red"
  }

  return (
    <div className="App">
      <h1>forwardRef in React</h1>
       <User ref={inputRef}/>
      <button onClick={updateInput}>Update InputBox</button>
    </div>
  );
}

export default App;
