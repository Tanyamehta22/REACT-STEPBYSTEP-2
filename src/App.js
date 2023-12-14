import "./App.css";
import {BrowserRouter} from 'react-router-dom';
import Home from './component/home'
import About from '/component/about'
import NavBar from "./components/Navbar";
 
 
function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/about' element={<About/>} />

      </Routes>
      </BrowserRouter>
       
    </div>
  );
}
  
   
export default App;
  

  
    