import {Link} from "react-router-dom"

function About(){
    return<>
    <h1>About Page</h1>
    <p>This is About Page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to="/">Go to Home page</Link>
    </>
}

export default About;