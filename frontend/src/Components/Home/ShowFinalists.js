import Finalists from "./Finalists"
import { React, useEffect, useState } from "react"

function ShowFinalists(props) {


    const [visible, setVisible] = useState(true)

    const toggleVisibility = () => {
        setVisible(current => !current)
    }

    return ( 
       
        <div className='Tinderlicious1'>
            <button onClick={toggleVisibility} className='view-and-submit' >Show Finalist Restaurants</button>
            {visible && <Finalists token={props.token} inviteId={props.inviteId} foodSearch={props.foodSearch} locationSearch={props.locationSearch} />}
       
       </div>
     );
}

export default ShowFinalists