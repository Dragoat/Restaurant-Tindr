import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";

function SentData() {

    //Renders Invitations you've sent list on Home page -- Your received invitations list is in Invitations.js

    const [invitationList, setInvitationList] = React.useState([])

    const userId = useSelector((state) => state.user.id)
    const username= useSelector((state) => state.user.username)
    const token = useSelector((state) => state.token.token)

    useEffect(() => {
        axios.get('http://localhost:8081/invites/sender/' + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            setInvitationList(response.data)
        })
    }, [])

    return ( 
        <div>
            <h1>Sent</h1>
              {invitationList.map((invite) => {
                    return (
                    <div id={invite.userId} key={invite.inviteId}>
                        <Link  to={{
                            pathname: '/invitations/' + invite.inviteId,
                            state: {
                                inviteId: invite.inviteId,
                                token: token
                            },
                        }}>
                        <p>Invite for {invite.appointment} to user #{invite.inviteId}</p>
                        </Link>
                     

                    </div>
                    )
            })} 

        </div>

     
     )
}

export default SentData

   