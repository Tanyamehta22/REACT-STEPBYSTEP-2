import{Link, useNavigate} from "reat-router-dom"

function Home(){
    const navigate = useNavigate();
    const NavToPage=(url)=>{
        navigate("")
    }
    
    return(
        <div>
            <h1>HOME PAGE</h1>
            <p>This is a Home Page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to="/about">Go to About page</Link>
            <br/>
            <button onClick={()=>NavToPage('/about')}>GO TO ABOUT PAGE</button>
            <br/>
            <button onClick={()=>NavToPage('/filter')}>GO TO FILTER PAGE</button>
        </div>
    )
        
}
   
export default Home