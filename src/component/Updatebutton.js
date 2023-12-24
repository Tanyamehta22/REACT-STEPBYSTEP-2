import React from 'react';
import { CommonContext } from './component/CommonContext'
 function UpdateButton(){

    return (
      <CommonContext.Consumer >
        {
            ({updatecolor})=>(
            <div>
                <button 
            onClick={()=>updatecolor('yellow')}>Update yellow color</button>
               <button 
            onClick={()=>updatecolor('blue')}>Update blue color</button>
             <button 
            onClick={()=>updatecolor('red')}>Update red color</button>
            </div>

            
                
            )
        }
        </CommonContext.Consumer>
    );
  
}
export default UpdateButton