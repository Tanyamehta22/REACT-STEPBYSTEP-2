
 
import logo from './logo.svg';
import './App.css';
import User from './User4';
import Members from './Members';

function App(){
  function getData()
  {
    alert("hello from app")
  }
 
return(
  <div className='App'>
    <User4 data={getData}/>
    <User4 data={getData}/>
    <User4 data={getData}/>
    <User4 data={getData}/>
    <div style={{float: 'right'}}>
      <Members data={getData/>
    </div>
     
  </div>
);
}
 
 export default App;
   
  
   
  