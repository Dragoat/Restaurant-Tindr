import Finalists from "./Finalists"
import { React, useEffect, useState } from "react"

function ShowFinalists(props) {


    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(current => !current)
    }

    return ( 
        <div>
            <p>{props.inviteId}</p>
        <button onClick={toggleVisibility}>show finalists</button>
        {visible && <Finalists token={props.token} inviteId={props.inviteId} />}
        </div>
     );
}

export default ShowFinalists