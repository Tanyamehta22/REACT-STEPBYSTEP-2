
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import React , {useStae}from 'react'
 
function App(){
  const [status, setstatus]= React.usedState(true)
  return(
    <div className='App'>
      {
        status? <h1>Hello World!</h1> :null
      }
       
      {/* <button onClick={()=> setstatus(false)}>HIDE</button>
      <button onClick={()=> setstatus(true)}>SHOW</button> */}
      <button onClick={()=> setstatus(!status)}>TOGGLE</button> 

    </div>
  );
}

export default App;