
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
import User2 from './User2';
import User3 from './User3';
 
class App extends Component {
   
  constructor()
  {
    super();
    this.state={
      data:1
    }
  }

  apple()
  {
    this.setState({data:this.state.data+1})
  }

  render() 
  {
    return (
      <div className='App'>
        <h1> Hello world!</h1>
        <button onclick= {()=> this.apple()}>UPDATE DATA</button>
      </div>
    );
  }
    
}

export default App;
