import React from 'react';
import { CommonContext } from './component/CommonContext'
class Header extends React.Component {
  

  render(){
    return (
      <CommonContext.Consumer >
        {
            ({color})=>(
                <h1 style={{backgroundColor:color }}>Hello, this is Header page</h1>
            )
        }
        </CommonContext.Consumer>
    );
  }
}
export default Header