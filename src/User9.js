function User(props)
{
    const data={naame:'anil sidhu', email:'amil@test.com'}
    return(
        <div>
            <h2>User Name:</h2>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}

export default User;