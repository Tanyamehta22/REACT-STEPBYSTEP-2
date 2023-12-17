import {Link, NavLink} from 'react-router-dom'

function NavBar(){
    return(<div>
        <ul className='navbar'>
            {/* <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/">HOME</Link></li> */}
            <li><NavLink className="nav-bar-link" style={{color:'red'}} to='/'>Home</NavLink></li>
            <li><NavLink className="nav-bar-link"  to='/about'>About</NavLink>  </li>
            <li><NavLink className="nav-bar-link"  to='/contact'>Contact Us</NavLink> </li>
            <li><a href='/User/anil'>Anil</a></li>
            <li><a href='/User/peter'>Peter</a></li>
            
            
        </ul>
    </div>)
}


export default NavBar