import {Link} from 'react-router-dom'

function NavBar(){
    return(<div>
        <ul>
            {/* <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/">HOME</Link></li> */}
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
        </ul>
    </div>)
}


export default NavBar