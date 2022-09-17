import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";


function Invitations() {
    const userId = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.token.token);
    // console.log(username)
    // console.log(token)

    
    const [invitations, setInvitations] = React.useState([]);

    // useEffect(() => getInvitations, [])
    function getInvitations () {
        fetch('http://localhost:8081/invite_list/invitee/' + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => setInvitations(data))  
        console.log(invitations)
        }





    return ( 
        <div>
            <h1>Invitations</h1>
            
              {invitations.map((invite) => {
                return(
                    <div id={invite.userId} key={invite.inviteId}>
                        <Link to='/invitations/' token={token} userId={userId} inviteId={invite.inviteId}>
                        <p>{invite.inviteId} link to invitation data</p>
                        <p></p>
                        </Link>
                    </div>
                )
            })} 

            <button onClick={getInvitations}>Get Invitations</button>
        </div>
     );
}

export default Invitations;