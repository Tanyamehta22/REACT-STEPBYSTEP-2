import React from 'react'
class   Student1 extends React.Component{
    componentWillUnmount()
    {
        console.warn("componentWillUnmount called")
    }

   
  render()
  {

    return(
      <div className='App'>
        <h1>Student Component </h1>
         
      </div>
    );
  }

}
export default Student1;
 
 
 