import "./App.css";
import React, {useState, useMemo} from "react";
  
function App(){
  const [count, setCount] = useState(0);
  const [item,setItem] = useState(10);

  const multiCountMemo = useMemo(function multiCount(){
    console.warn("multiCount")
    return count *5
  }, [count])
 
    return(
      <div className="App">
        <h1>USEMEMO HOOK IN REACT</h1>
        <h2>COUNT :</h2>
        <h2>ITEM :</h2>
        <h2>{multiCountMemo}</h2>
        <button onClick={() => setCount(count +1)}>UPDATE COUNT</button>
        <button onClick={() => setItem(item*10)}>UPDATE ITEM</button>
         
      </div>
    );
  }

     
   

export default App;
