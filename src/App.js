import './App.css';
import React from 'react'
import Student1 from './Student1'
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
   
  render()
  {

    return(
      <div className='App'>
        {
          this.state.show ? <Student1/>: <h1>Child Component Removed</h1>
        }
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
      </div>
    );
  }

}
export default App;
 
 
 
  
   
  