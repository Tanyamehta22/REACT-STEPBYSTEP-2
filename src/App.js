
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';
 
 
 function App()
  {
    return (
      <div className='App'>
        <h1>PROPS IN REACT!</h1>
         <Student name = "anil" email="anil.com" other={{address:'delhi', mobile: "23939"}}/>
         
         <Student name = "Peter" email="peter.com" other={{address:'noida', mobile: "232339"}}/>
         <Student name = "Preti" email="preti.com" other={{address:'lucknow', mobile: "2392738"}} />
      </div>
    );
  }
    


export default App;
