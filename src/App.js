 import './App.css';
 import React,{useEffect,useState} from 'react'
 function App(){
  const [data, setData]= useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/todo").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  },[])
  console.warn(data)
  return(
    <div className='App'>
      <h1>GET API CALL</h1>
      <table border='1'>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.userId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        }
      </table>
    </div>
  )
 }


           
       
   
 
export default App;
  

  
    