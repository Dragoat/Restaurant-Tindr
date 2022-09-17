import react from 'react';
import axios from 'axios';
import { useState } from 'react';

function InviteData(props) {

    const [inviteData, setInviteData] = useState({});


    axios.get('http://localhost:8081/invites/' + props.inviteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token
        }   
    })
        .then(response => response.json())
        .then(data => setInviteData(data))
        console.log(inviteData)



    return ( 
        <div>invite data</div>
     );
}

export default InviteData;