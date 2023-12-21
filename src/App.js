 import './App.css';
 import React,{useEffect,useState} from 'react'
 function App(){
  const [data, setData]= useState([])
  useEffect(()=>{
   getList()
  },[])
  console.warn(users)

  function getList()
  {
    fetch("http://localhost:4000/todo").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp)
        setData(resp)
      })
    })
  }
  function deleteUser(id)
  {
    fetch(`,http://localhost:4000/todo/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getList()
      })
    })
  }
  return(
    <div className='App'>
      <h1>DELETE DATA WITH API CALL</h1>
      <table border='1'>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Operations</td>
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td><button onClick={()=>deleteUser( item.id)}>DELETE</button></td>
          </tr>
          )
        }
      </table>
    </div>
  )
 }


           
       
   
 
export default App;
  

  
    