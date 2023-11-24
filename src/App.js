import './App.css';
import React,{useState,useEffect} from 'react'
function App(){
  const [data,setdata]= useState("Anil")
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={()=>setdata("Sidhu")}>Update Data</button>
    </div>
  );
}
 

export default App;
 
 
 
  
   
  