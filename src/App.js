import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      count:0
    }
     
  }
   
  }

  shouldComponentUpdte()
  {
    console.warn("shouldComponentUpdate", this.state.count);
    {
      return true;
    }
  }
  render()
  {
    console.warn("render")

    return(
      <div className='App'>
        <h1>Should Component Update {this.state.count} </h1>
        <button onClick={()=>{history.setState({count:this.state.count+1})}}>UPDATE COUNTER</button>

         
      </div>
    );
  }


 

export default App;
 
 
 
  
   
  