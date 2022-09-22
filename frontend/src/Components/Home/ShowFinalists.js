import Finalists from "./Finalists"
import { React, useEffect, useState } from "react"

function ShowFinalists(props) {


    const [visible, setVisible] = useState(true)

    const toggleVisibility = () => {
        setVisible(current => !current)
    }

    return ( 
        <div className="ShowFinalists">
        <h3 className="show-finalist-restaurants">Show Finalist Restaurants</h3>
            {visible && <Finalists token={props.token} inviteId={props.inviteId} foodSearch={props.foodSearch} locationSearch={props.locationSearch} />}
        </div>
     );
}

export default ShowFinalists