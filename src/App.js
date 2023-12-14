import "./App.css";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './component/home'
import About from '/component/about'
import NavBar from "./components/Navbar";
import Page404 from "./component/Page404";
 
 
function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/about' element={<About/>} />

        {/* <Route path='/*' element={<Page404/>} /> */}

        <Route path='/*' element={<Navigate to="/" />} />
        

      </Routes>
      </BrowserRouter>
       
    </div>
  );
}
  
   
export default App;
  

  
    