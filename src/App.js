
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Student2 from './student2';
import React from 'react'
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"Anil"
    }
  }
render()
{
  return(
    <div className='App'>
      <h1>Props!!</h1>
      <Student2 name={this.state.name}email="anil@gmail.com"/>
      <button> onclick={()=>this.setState({name:"Sidhu"})}UPDATE NAME</button>
    </div>
  );
}
}


export default App;
 
 
   