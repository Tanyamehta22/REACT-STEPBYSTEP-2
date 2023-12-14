import "./App.css";
import {BrowserRouter} from 'react-router-dom';
import Home from './component/home'
import About from '/component/about'
 
 
function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/about' element={<About/>} />

      </Routes>
      </BrowserRouter>
      <h1>Hello React router 6</h1>
    </div>
  );
}
  
   
export default App;
  

  
    