import Finalists from "./Finalists"
import { React, useEffect, useState } from "react"

function ShowFinalists(props) {


    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(current => !current)
    }

    return ( 
        <div>
        <button onClick={toggleVisibility}>Show Finalist Restaurants</button>
        {visible && <Finalists token={props.token} inviteId={props.inviteId} foodSearch={props.foodSearch} locationSearch={props.locationSearch} />}
        </div>
     );
}

export default ShowFinalists