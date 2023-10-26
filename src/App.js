import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
import User2 from './User2';
import User3 from './User3';
 
function App() {
   const [data, setData] = useState(0)
   function updateData(){
    setData(data+1)
   }
   console.warn("______");
  return (
    <div className="App">
       <h1>{data}</h1>
       <button onClick= {updateData}>Update Data</button>
       </div>
  );
}

export default App;
