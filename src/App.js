
import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import React , {useState}from 'react'
 
function App(){
  const [name,setName] = useState("");
  const [tnc,setTnc]= useState(false);
  const [interest, setinterest]= useState("");
  function getFormData(e)
  {
    console.log(name,tnc,interest)
    e.preventDefault()
  }
   
  return(
    <div className='App'>
      <h1>HANDLE FORM IN REACT</h1>
      <form onSubmit = {getFormData}>
        <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/> <br/><br/>
        <select onChange={(e)=> setinterest(e.target.checked)}>
          <option>SELECT OPTIONS</option>
          <option>MARVEL</option>
          <option>DC</option>
        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms and conditions</span> <br/> <br/>
        <button type="submit">Submit</button>
        <button type="submit">Clear</button>
      </form>
    </div>
     
     
  );
}

export default App;