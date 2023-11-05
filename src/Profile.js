import{useState} from 'react'
function Profile()
{   
    const [loggedIn,setLoggedIn]=useState(1)
    
    // METHOD -1 OF CONDITIONAL WHICH IS NOT RECOMMENED--------

    // if (loggedIn){
    //     return (
    //         <div>
    //             <h1>WELCOME ANIL</h1>
    //         </div>
    //     )
    // }
    // else {
        
    // return (
    //     <div>
    //         <h1>WECOME GUEST</h1>
    //     </div>
    // )
    // }


    // METHOD 2 OF CONDITIONAL( CALLED-TERNIARY OPERATOR) WHICH IS RECOMMENED-----------------

    // return (
    //     <div>
    //         {loggedIn?<h1>WELCOME ANIL</h1>:<h1>WELCOME GUEST </h1>}
    //     </div>
    // )

    // FOR MULTIPLE CONDITION (USE 1,2,3..)-----------------------------
    return (
        <div>
            {loggedIn==1?
            <h1>WELCOME USER 1</h1>
            :loggedIn==2?<h1>WELCOME USER 2</h1>
            :<h1>WECOME USER3</h1>}
        </div>
    )


}

export default Profile;