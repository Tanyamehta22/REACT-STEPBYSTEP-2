import logo from './logo.svg';
import './App.css';
import User from './User'
import User2 from './User2';
import User3 from './User3';
 
function App() {
  // VARIABLE TAKING
  let dat = "anil sindhu"
  
  function apple()
  {
    data = "peter"
    alert(data);
  }

  return (
    <div className="App">
       <h1>{anil sidhu}</h1>
       {/* <button onClick={apple}>click Me</button> */}

       {/* WE USE ARROW FN TO DIRECTLY USE ALERT */}
       <button onClick={()=>alert("hello")}>click Me</button>

       {/* WE CAN ALSO CALL APPLE USING ARROW FUN */}
       <button onClick={()=>apple()}>click Me</button>

       <User/>
       <User2/> 
       <User3/>
       </div>
  );
}

export default App;
