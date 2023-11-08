import React,{useState} from "react"
function Login(){
    const [user,setUser]=useState("");
    const [password,setpassword]= useState("");
    const[userErr, setUserErr]=userState(false);
    const[passErr, setPassErr]=userState(false);


function loginHandle(e)
{
    if(user.length<3 || password.length<3)
    {
        alert("type correct values")
    }
    else
    {
        alert("all good :)")
    }
    e.preventDefault()
}

function userHandler(e){
    let item=e.target.value;
    if(item.length<3)
    {
        setUserErr(true)
    }
    else
    {
        setUserErr(False)
    }
    setUser(item)
    
}

function PasswordHandler(e){
    let item=e.target.value;
    if(item.length<3)
    {
        setPassErr(true)
    }
    else
    {
        setPassErr(False)
    }
    setpassword(item)
    
}

    return(
    <div>
        <h1>login</h1>
        <form onSubmit={loginHandle}>
            <imput type="text" placeholder = "Enter User Id" onChange={userHandler}/>{userErr?<span>User Not Valid</span>:""}
            <br/> <br/>

            <input type="password" placeholder="Enter User password" onChange={PasswordHandler}/>{passErr?<span>Password Not Valid</span>:""}
            <br/> <br/>
            <button type = "submit">Login</button>
        </form>
    </div>
    )
}
export default Login;
