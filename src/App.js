import logo from './logo.svg';
import './App.css';
import User5 from './USER5.JS';

function App(){
  const [name, setName]= React.useState("Anil")
  return(
    <div className='App'>
      <h1>Render Method in React</h1>
      <User5/>
      {/*<button onClick={()=>setName("Sindu")}>UPDATE NAME</button> */}
    </div>
  );
}

export default App;
 
 
 
  
   
  