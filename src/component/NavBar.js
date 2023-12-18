import {Link, NavLink} from 'react-router-dom'

function NavBar(){
    return(<div>
        <ul className='navbar'>
           
            <li><NavLink 
            style={({isActive})=>{return {color:  isActive ? 'skyblue' :''}}}className="nav-bar-link" to='/'>Home</NavLink></li>

            <li><NavLink
            style={({isActive})=>{return{color:  isActive ? 'skyblue' :' '}}} className="nav-bar-link"  to='/about'>About</NavLink>  </li>

            <li><NavLink
            style={({isActive})=>{return{color:  isActive ? 'skyblue' :''}}} className="nav-bar-link"  to='/contact'>Contact Us</NavLink> </li>
            <li><a href='/User/anil'>Anil</a></li>
            <li><a href='/User/peter'>Peter</a></li>

            <li><NavLink className='nav-bar-link' to='/login'>Login </NavLink></li>
            
            
        </ul>
    </div>)
}


export default NavBar