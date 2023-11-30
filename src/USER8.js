function User(props)
{
    return(
        <div>
        <span>User {props.data.name}</span>
        <span>User {props.data.email}</span>
        <span>User {props.data.address}</span>
        </div>
    )
}

export default User;