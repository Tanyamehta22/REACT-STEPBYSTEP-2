
 
import logo from './logo.svg';
import './App.css';
import React from 'react'
 
class App extends React.Component{
  constructor()
  {
    super();
    this.states={
      data: "Anil"

    }
     
  }
  render()
  {
    console.warn("render")

    return(
      <h1>Hello World {this.state.data}</h1>
    )
  }
}
 
 export default App;
   
  
   
  