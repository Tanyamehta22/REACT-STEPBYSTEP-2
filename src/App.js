 import './App.css';
 import React from 'react'
 import {Link, Route } from 'react-router-dom'
 import Nav from './Nav'
 import Home from './component/home';
 import about from './component/about'
 function App(){
  return (
    <div className='App'>
       <Nav/>
        <Route path="/about"><About/></Route>
        <Route path="/" exact={true}><Home/></Route>
        <br/>
       
    </div>
  );
 }

 
  
   
export default App;
  

  
    