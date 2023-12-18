import "./App.css";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './component/home'
import About from '/component/about'
import NavBar from "./components/Navbar";
import Page404 from "./component/Page404";
import User from "./component/User";
import Contact from "./component/Contact";
 
 
function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/about' element={<About/>} />

        <Route path='/user:name' element={<User/>} />

        

        <Route path='/*' element={<Navigate to="/" />} />

        <Route path="/filter" element={<Filter/>}/>
        
        <Route path="/Contact/" element={<Contact/>}/>
          <Route path="company" element={<Company/>}/>
          <Route path="channel" element={<Channel/>}/>
          <Route path="other" element={<Other/>}/>
        
      
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}
  
   
export default App;
  

  
    