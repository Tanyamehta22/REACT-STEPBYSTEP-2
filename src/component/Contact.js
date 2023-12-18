import { Outlet } from "react-router";
import {Link} from "react-router-dom";
function Contact(){

    return(
        <div>
            <h1>Contact Us Page</h1>
            <h2>Here we have some other business</h2>
            <Link to="company">COMPANY</Link>
            <Link to="channel">CHANNEL</Link>
            <Link to="other">OTHER</Link>
            <Outlet/>
        </div>
    )
}

export default Contact;