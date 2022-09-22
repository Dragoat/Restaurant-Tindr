import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import {Link} from "react-router-dom"

function Invitations() {

    //Renders Invitations sent to you list on Home page -- Your sent invitations list is in SentData.js

    const [invitationList, setInvitationList] = React.useState([])

    const userId = useSelector((state) => state.user.id)
    const token = useSelector((state) => state.token.token)

    useEffect(() => {
        axios.get('http://localhost:8081/invite_list/invitee/' + userId, {
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
            <h3>Your Invitations</h3>
              {invitationList.map((invite) => {
                    return (
                    <div id={invite.userId} key={invite.inviteId}>
                        <Link  to={{
                            pathname: '/invitations/' + invite.inviteId,  //this path renders InvtationData.js component for specific invite
                            state: {
                                inviteId: invite.inviteId,
                                token: token
                            },
                        }}>
                        <p>Invite from user #{invite.inviteId}</p>
                        </Link>
                    </div>
                    )
            })} 

        </div>
     )
}

export default Invitations

   