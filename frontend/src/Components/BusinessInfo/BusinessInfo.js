import React from "react";

function BusinessInfo(props) {

    return ( 
        <div>
        <h1>Hours</h1>
        <p>Monday: {props.startTime} -{props.closeTime}</p>
        </div>
     );
}

export default BusinessInfo;