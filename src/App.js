 import './App.css';
 import React from 'react'
 import {BrowserRouter as Route,Link,Route } from 'react-router-dom'
  
 function App(){
  return (
    <div className='App'>
        <Router>
            <Link to='/' >Home</Link><br/><br/>
            <Link to='/' >About</Link><br/><br/>
            <Link to='/login' >LOGIN</Link><br/><br/>


            <switch>
            <Route path='/' exact={true}><Home/></Route>
            <Route path='/about'><About/></Route>

            <Route path='*'><PageNotFound/></Route>
            </switch>


        </Router>
        
       
    </div>
  );
 }

 function Home(){
  return (
    <div>
      <h1>HOME PAGE</h1>
      <p>This is home page of website</p>
    </div>
  )
 }

 function About(){
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <p>This is about page of website</p>
    </div>
  )
 }

 function About(){
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <p>This is about page of website</p>
    </div>
  )
 }
  
 
 function PageNotFound(){
  return (<div>
    <h1>404 Page</h1>
    <p>This is Not found</p>
  </div>)
 }
export default App;
  

  
    